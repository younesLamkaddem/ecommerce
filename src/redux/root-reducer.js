import UserReducer from './user/user.reducer'
import {combineReducers} from 'redux'
import CartReducer from './cart/cart.reducer'

export default combineReducers({
    user : UserReducer,
    cart : CartReducer
}) 