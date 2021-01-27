import React from 'react';
import {Link} from 'react-router-dom';
import  './header.style.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
const Header = () => (

    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link to="/shop" className="option">Shop</Link>
            <Link to="/" className="option">Home</Link>
        </div>
    </div>
)

export default Header