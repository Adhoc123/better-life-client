import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Footer = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Footer;