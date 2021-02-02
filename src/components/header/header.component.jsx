import React from 'react';
import {Link} from 'react-router-dom';
import  './header.style.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../firebase/firebase.utils'

import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {selectHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {createStructuredSelector} from 'reselect'
const Header = ({currentUser , hidden}) => (

    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/" className="option">CONTACT</Link>
            {
                currentUser ? <div className="option" onClick={()=> {auth.signOut()}}>SIGN OUT</div>

                 : <Link to="/sign">SIGN IN</Link>
            }
            <CartIcon  className="option" />
        </div>
        {
            hidden ? null :  <CartDropdown />

        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden : selectHidden
})

export default connect(mapStateToProps)(Header)