import {CartTypes} from './cart.types'

export const toggleCartHidden = () => ({
    type : CartTypes.GET_TOGGLE
})

export const AddItem = item => ({
    type : CartTypes.ADD_ITEM ,
    payload : item
})

export const RemoveItemFromCart = item => ({
    type : CartTypes.REMOVE_ITEM_FROM_CART_ITEMS,
    payload : item
})

export const removeItem = item => ({
    type : CartTypes.REMOVE_ITEM,
    payload : item
})