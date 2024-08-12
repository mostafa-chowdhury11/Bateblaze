import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [theme,setTheme]=useState('light')

useEffect(()=>{
    localStorage.setItem('theme',theme)
    const localTheme=localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme',localTheme)
},[])


    const handleToggle=e=>{
        console.log(e.target.value)
        if(e.target.checked){
            setTheme('synthwave')

        }else{
            setTheme('light')
        }
    }

    return (
        <div className="  navbar bg--400  fixed shadow-lg">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-xl gap-0">Byte <span className='text-gray-500'>Blaze</span></a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <NavLink to='/' className='font-bold'><a>Home</a></NavLink>
            <NavLink to='/blogs' className='font-bold'><a>Blogs</a></NavLink>
            <NavLink to='/bookmarks' className='font-bold'><a>Bookmarks</a></NavLink>
             
          
          </ul>  

          <input type="checkbox"  
          onChange={handleToggle}
          className="toggle theme-controller" />
        </div>
      </div>
    );
};

export default Navbar;