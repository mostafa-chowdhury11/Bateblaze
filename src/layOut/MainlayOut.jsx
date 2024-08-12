import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';

const MainlayOut = () => {
    return (
        <div>
            <div className='h-16'>
                <Navbar/>
            </div>
            <Outlet/>
        </div>
    );
};

export default MainlayOut;