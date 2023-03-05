import Header from "./components/Header";
import Blogs from './components/Blogs';
import UserBlogs from "./components/UserBlogs";
import BlogDetail from "./components/BlogDetail";
import AddBlog from "./components/AddBlog";


import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Auth from "./components/Auth";


function App() {
  return <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path="/auth" element={<Auth />}/>
        <Route path="/blogs" element={<Blogs />}/>
        <Route path="/blogs/add" element={<AddBlog />}/>
        <Route path="/myBlogs" element={<UserBlogs />}/>
        <Route path="/myBlogs/:id" element={<BlogDetail />}/>
        
      </Routes>
    </main>
  </React.Fragment>;
}

export default App;
