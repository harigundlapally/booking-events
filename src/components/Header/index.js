import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import './Header.css';

const index = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="logo">
                        <Link to="/">
                            <img src="/images/logo.svg" alt="logo image" />
                            <div>LOGO<span>IPSUM</span></div>
                        </Link>
                    </div>
                    <Navbar />
                </div>
            </div>
        </header>
    );
};

export default index;