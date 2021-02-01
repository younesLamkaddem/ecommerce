import { CartTypes } from './cart.types'
import {AddItemToCart} from './cart.utils'
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
        default : 
        return state
    }
}

export default CartReducer