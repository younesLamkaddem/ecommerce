
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



