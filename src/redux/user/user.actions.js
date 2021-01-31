import {UserTypes} from './user.types'

export const SetCurrentUser = user => ({
    type : UserTypes.SET_CURRENT_USER,
    payload : user
})