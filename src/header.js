import React from 'react'
import './header.css';


function Header() {
    return (
        <div className='header'>
            <ul id='header_left'>
                <li>forum</li>
                <li>Categories</li>
                <li>Books</li>
                <li>Recipe index</li>
                <li>popular</li>
            </ul>
            <ul id='header_right'>
                <li>REGISTER</li>
                <li>LOGIN</li>
            </ul>
        </div>
    )
}

export default Header
