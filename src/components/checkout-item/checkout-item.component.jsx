import React from 'react'
import './checkout-item.style.scss'
import {connect} from 'react-redux'
import {RemoveItemFromCart , AddItem , removeItem} from '../../redux/cart/cart.actions'
const CheckoutItem = ({cartItem  , clearItem , AddItem , removeItem}) => {
        const {imageUrl , name , quantity , price} = cartItem;
    return (
        <div className='checkout-item'>
        <div className="image-container ">
            <img src={imageUrl} alt='mypic' />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
        <div className='arrow' onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>            {quantity}
            <div className="arrow" onClick={ () => AddItem(cartItem)}>&#10095;</div>

            </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={ () => clearItem(cartItem)}>&#10005;</div>
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem : item => dispatch(RemoveItemFromCart(item)),
    AddItem: item => dispatch(AddItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null ,mapDispatchToProps)(CheckoutItem)