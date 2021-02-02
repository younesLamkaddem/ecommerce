import React from 'react'
import './cart-icon.style.scss';
import {ReactComponent as Bag} from '../../assets/bag.svg'
import { connect } from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'

const CartIcon = ({toggleCartHidden , itemsCount}) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <Bag  className="shopping-icon" />
            <span className="item-count">{itemsCount}</span>
        </div>
    )
}


const mapToDispatch = dispatch => ({
    toggleCartHidden : ()=> dispatch(toggleCartHidden())
})

const mapStateToProps = (state) => ({
    itemsCount : selectCartItemsCount(state)
})
export default connect(mapStateToProps,mapToDispatch)(CartIcon)