import React from 'react'
import './cart-icon.style.scss';
import {ReactComponent as Bag} from '../../assets/bag.svg'
import { connect } from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
const CartIcon = ({toggleCartHidden}) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <Bag  className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    )
}


const mapToDispatch = dispatch => ({
    toggleCartHidden : ()=> dispatch(toggleCartHidden())
})
export default connect(null,mapToDispatch)(CartIcon)