import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const MainlayOut = () => {
    return (
        <div>
            <div className='h-16'>
                <Navbar/>
            </div>
            <div className='min-h-[calc(100vh-116px)]'>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainlayOut;