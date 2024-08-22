import React from 'react';
import {useState,useEffect} from 'react'
import { blogDelete, getBlogs } from '../Utility';
import BlogCard from './BlogCard';
import Emty from '../Components/Emty';
const BookMarks = () => {
const [blogs,setBlogs]=useState([])
useEffect(()=>{
    const bb=getBlogs()
    setBlogs(bb)
},[])

const handleDelete=id=>{
     blogDelete(id)
    const storedBlog=getBlogs()
    setBlogs(storedBlog)
}
if(blogs.length<1)return <Emty message={'no book data found'} lavel={'go to blogs'} address={'/blogs'}></Emty>
    return (
        <div className=" min-h-[calc(100vh-116px)] container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 bg-gray-100">
      <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3'>
      {
         blogs.map(blog=><BlogCard
         key={blog.id}
         blog={blog}
         deleteable={true}
         handleDelete={handleDelete}
         ></BlogCard>)
        }
      </div>
     

     </div>
    );
};

export default BookMarks;