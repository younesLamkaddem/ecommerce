import { CartTypes } from './cart.types'

const INITIAL_STATE = {
    hidden : true
}


const CartReducer = (state = INITIAL_STATE , action) => {
    switch(action.type){
        case CartTypes.GET_TOGGLE :
            return {
                ...state,
                hidden : !state.hidden
            };
        default : 
        return state
    }
}

export default CartReducer