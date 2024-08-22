import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div>
            <div className="hero -mt-16">
  <div className="hero-content text-center">
    <div className="max-w-7xl">
      <h1 className="text-5xl font-bold">Welcome to <span className=' bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient'>byteblaze</span></h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>

    <div className='flex gap-2 justify-center'>
        
        <Link to='/blogs'>
        <a href="#_" className="relative inline-block px-4 py-2 font-medium group">
<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span className="absolute inset-0 w-full h-full bg-white border-2 border-warning group-hover:bg-primary"></span>
<span className="relative text-black group-hover:text-white">Blogs</span>
</a>
        </Link>
        <Link to='/bookmarks'>
        <a href="#_" class="relative inline-block px-4 py-2 font-medium group">
<span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span class="absolute inset-0 w-full h-full bg-white border-2 border-warning group-hover:bg-primary"></span>
<span class="relative text-black group-hover:text-white ">Bookmarks</span>
</a>
        </Link>
    </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero;