import UserReducer from './user/user.reducer'
import {combineReducers} from 'redux'
import CartReducer from './cart/cart.reducer'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key :'root',
    storage ,
    whitelist :['cart']
}
const RootReducer= combineReducers({
    user : UserReducer,
    cart : CartReducer
}) 

export default persistReducer(persistConfig , RootReducer)