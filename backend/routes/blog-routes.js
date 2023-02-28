import express from 'express';
import { getAllBlogs } from '../controllers/blog-controller';
const router = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);

export default blogRouter;