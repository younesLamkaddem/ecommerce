import {CartTypes} from './cart.types'

export const toggleCartHidden = () => ({
    type : CartTypes.GET_TOGGLE
})

export const AddItem = item => ({
    type : CartTypes.ADD_ITEM ,
    payload : item
})