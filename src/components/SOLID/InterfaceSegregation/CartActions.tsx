import React, { MouseEventHandler } from 'react'

interface CartActionsProps {
    onAddToCart: MouseEventHandler
    onAddToWishList: MouseEventHandler
}

const CartActions: React.FC<CartActionsProps> = ({
    onAddToCart,
    onAddToWishList
}) => {
  return (
    <div>
        <button onClick={onAddToCart}>Add to cart</button>
        <button onClick={onAddToWishList}>Add to wish list</button>
    </div>
  )
}

export default CartActions