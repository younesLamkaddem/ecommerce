import React from 'react'
import './checkout.style.scss'
import {connect} from 'react-redux'
import {selectCartTotal , selectCartItems} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
const Checkout = ({total , items }) => {
    return (

        <div className="checkout-page">
            <div className="checkout-header">
                <div className="checkout-block">
                    <span>PRODUCT</span>
                </div>
                <div className="checkout-block">
                    <span>NAME</span>
                </div>
                <div className="checkout-block">
                    <span>QUANTITY</span>
                </div>
                <div className="checkout-block">
                    <span>PRICE</span>
                </div>
                <div className="checkout-block">
                    <span>REMOVE</span>
                </div>

            </div>
            {
                items.map(item => {
                  return  <CheckoutItem key={item.id} cartItem={item} />
                })
            }
            <div className='total'>
                TOTAL : {  `${total}` }
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    total : selectCartTotal , 
    items : selectCartItems
})

export default connect(mapStateToProps)(Checkout)