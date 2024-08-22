import React from 'react';
import { Link } from 'react-router-dom';

const Emty = ({message,address,lavel}) => {
    return (
        <div className='flex flex-col justify-center items-center text-red-300 min-h-[calc(100vh-116px)]'>
         {message}

         <Link to={address}>
        <a href="#_" className="relative inline-block px-4 py-2 font-medium group">
<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span className="absolute inset-0 w-full h-full bg-white border-2 border-warning group-hover:bg-primary"></span>
<span className="relative text-black group-hover:text-white">{lavel}

</span>
</a>
        </Link>
        </div>
        
    );
};

export default Emty;