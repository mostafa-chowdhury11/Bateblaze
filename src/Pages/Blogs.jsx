import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import BlogCard from './BlogCard';
import Loader from '../Components/Loader';

const Blogs = () => {
    const blogs=useLoaderData()
    const navigation=useNavigation()
    console.log(blogs)
if(navigation.state === 'loading')return <Loader/>
    return (
        <section className="bg-gray-800 text-gray-100">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900">
                <img src={blogs[0].cover_image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
                <div className="p-6 space-y-2 lg:col-span-5">
                    <h3 className="text-2xl font-semibold sm:text-2xl group-hover:underline group-focus:underline">{blogs[0].title                    }</h3>
                    <span className="text-xs text-gray-400">February 19, 2021</span>
                    <p></p>
                </div>
            </a>
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
               {
                blogs.map(blog=><BlogCard
                key={blog.id}
                blog={blog}
                ></BlogCard>)
               }

            </div>
            
        </div>
    </section>
    );
};

export default Blogs;