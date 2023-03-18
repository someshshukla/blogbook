import React, { useEffect} from 'react'
import axios from "axios";


const Blogs = () => {
  const [blogs, setblogs] = useState();
  const sendRequest  = async() => {
    const res = await axios.get("http://localhost:5000/api/blog").catch(err => console.log(err));
    const data = await res.data;
    return data;
  }
  useEffect(() => {
    sendRequest().then(data=>console.log(data));

  }, [])
  
  return (
    <div>Blogs</div>
  )
}

export default Blogs