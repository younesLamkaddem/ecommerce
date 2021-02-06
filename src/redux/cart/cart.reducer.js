import { CartTypes } from './cart.types'
import {AddItemToCart , RemoveItem} from './cart.utils'
const INITIAL_STATE = {
    hidden : true,
    cartItems : []
}


const CartReducer = (state = INITIAL_STATE , action) => {
    switch(action.type){
        case CartTypes.GET_TOGGLE :
            return {
                ...state,
                hidden : !state.hidden
            };
        case CartTypes.ADD_ITEM :
            return {
                ...state,
                cartItems : AddItemToCart(state.cartItems ,action.payload )
            }
        case CartTypes.REMOVE_ITEM_FROM_CART_ITEMS : 
            return {
                ...state , 
                cartItems : state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case CartTypes.REMOVE_ITEM : 
            return {
                ...state , 
                cartItems : RemoveItem(state.cartItems , action.payload)
            }
        default : 
        return state
    }
}

export default CartReducer