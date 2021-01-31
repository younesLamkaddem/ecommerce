import React from 'react'
import './cart-dropdown.style.scss'
import CustomButton from '../customButton/customButton.component'
const CartDropdown = () => {

    return (

        <div className="cart-dropdown">
            <div  className="cart-items"/>
            <CustomButton>CHECK OUT</CustomButton>
        </div>
    )
}

export default CartDropdown