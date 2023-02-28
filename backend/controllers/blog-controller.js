import Blog from "../model/Blog";

export const getAllBlogs = async (req, res, next) => {
    let blogs;
    try {
        blogs = Blog.find();
    }catch(err){
        return console.log(err)
    }
    if (!blogs) {
        return res.status(404).json({message: "No blogs found"})
    }
    return res.status(200).json({blogs})
};

export const addBlog = async(req, res, next) => {
    const { title, description, image, user} = req.body;

    let existingUser;
    try {
        existingUser = await User.findById(user);

    }catch(err) {
        return console.log(err)
    }
    if(!existingUser) {
        return res.status(400).json({message:"Unable to find the user"})
    }
 
    const blog = new Blog({
        title, 
        description, 
        image, 
        user,
    });
    try {
      const session = await mongoose.startSession();
      session.startTransaction();
      await blog.save(session);
      existingUser.blogs.push(blog);
      await existingUser.save({session})
      await session.commitTransaction();
    } catch (err) {
        console.log(err)
        return res.status(500).json({message: err})
    } 
    return res.status(200).json({blog})
};

export const updateBlog = async(req, res, next) => {
    const { title, description } = req.body;
    const blogId = req.params.id;
    let blog;
    try{ blog = await Blog.findByIdAndUpdate(blogId, {

    })
    } catch (err) {
        return console.log(err)
    }
    if (!blog) {
        return res.status(500).json({message: "Unable to update the blog"})
    }
    return res.status(200).json({blog})
};

export const getById = async (req, res, next) => {
    const id = req.params.id;
    let blog;
    try {
        blog = await Blog.findById(id);
    } catch (err) {
        return console.log(err);
    }
    if (!blog) {
        return res.status(404).json({message: "No blog found"});
        
    }
    return res.status(200).json({ blog });
};  

export const deleteBlog = async (req, res, next) => {
    const id = req.params.id;
    
    let blog;
    try {
        blog = await Blog.findByIdAndRemove(id).populate('user');
        await blog.user.blogs.pull(blog);
        await blog.user.save();
    }catch(err){
        console.log(err);
    }
    if (!blog) {
        return res.status(500).json({message: "Unable to delete"})
    }
    return res.status(200).json({message: "Successfully deleted the blog"})
};