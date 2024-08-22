import React from 'react';
import { NavLink } from 'react-router-dom';
import jssljmg from "../../public/asset/404.jpg";
import { MdDelete } from "react-icons/md";
import { blogDelete } from '../Utility';

const BlogCard = ({blog,deleteable,handleDelete}) => {

    const {id,cover_image,title,description,published_at    }=blog;
 
    return (
        <div className='flex relative  '>
              <NavLink to={`/blog/${id}`}  rel="noopener noreferrer" href="#" className=" mx-auto group    
                transition border-2 hover:scale-105 hover:border-primary border-gray-200     hover:no-underline focus:no-underline bg-gray-900 hidden sm:block">
                    <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image || jssljmg}/>
                    <div className="p-6 space-y-2">
                        <h3 className="text-1xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                        <span className="text-xs text-gray-400">{new Date(published_at).toLocaleDateString()}</span>
                        <p>{description.slice(0,20).trim( )}</p>
                    </div>
                </NavLink>
                {
                    deleteable&& 
                    <div
                    onClick={()=>handleDelete(id)}
                     className=' absolute   -right-2 p-5 -bottom-2 bg-red-300 rounded-full cursor-pointer'>
                        <MdDelete />
                    </div>
                }
        </div>
    );
};

export default BlogCard;