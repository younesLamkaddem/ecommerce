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
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/" className="option">CONTACT</Link>
            <Link to="/sign" className="option">SIGN IN</Link>

        </div>
    </div>
)

export default Header