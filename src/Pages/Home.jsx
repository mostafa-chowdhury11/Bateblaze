import React from 'react';
import Navbar from '../Components/Navbar';
import Blogs from './Blogs';
import BookMarks from './BookMarks';
import Hero from '../Components/Hero';
import wave from '../../public/asset/wave.svg'

const Home = () => {
    return (
        <div className='flex flex-col justify-center min-h-[calc(100vh-116px)] relative'>
               <Hero/>

               <div className=' bg-red-400'>
                <img src={wave}  className='absolute w-full bottom-0'/>
               </div>
             
        </div>
    );
};

export default Home;