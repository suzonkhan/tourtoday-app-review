import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
const Header = () => {
    return (
        <nav>
            <ul>
                <CustomLink to="/"> Home</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/reviews">Reviews</CustomLink>
                <CustomLink to="/dashboard">Dashboard</CustomLink>
                <CustomLink to="/blog"> Blog</CustomLink>
            </ul>
        </nav>
    );
};

export default Header;