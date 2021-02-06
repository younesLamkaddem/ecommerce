
export const AddItemToCart = (CartItems , NewItem) => {

    const existingCartItem =CartItems.find(cartItem => 
        cartItem.id === NewItem.id
    )

    if(existingCartItem){
        return CartItems.map(cartItem => 
            cartItem.id === NewItem.id ? {...cartItem , quantity : cartItem.quantity+1} : cartItem
        )
    }

    return [...CartItems , {...NewItem , quantity :1 }]
}



export const RemoveItem = (cartItems , ItemTobeRemoved) => {

    const existingItem = cartItems.find(cartItem => 
        cartItem.id === ItemTobeRemoved.id
        )

    if(existingItem.quantity === 1 ){
       return cartItems.filter(cartItem => cartItem.id !== ItemTobeRemoved.id)
    }

    return cartItems.map(
        cartItem =>
            cartItem.id === ItemTobeRemoved.id ? {...cartItem , quantity : cartItem.quantity - 1} 
            : cartItem
        )
}