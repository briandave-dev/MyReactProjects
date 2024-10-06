import React from 'react'

interface CartDetailsProps {
    title: string;
    description: string;
    price: number;
    image: string;

}

const CartDetails: React.FC<CartDetailsProps> = ({
    title,
    description,
    price,
    image
}) => {
  return (
    <>
    <div>CartDetails</div>
    <img src={image} alt={title} />
    <div>Title: {title}</div>
    <div>Description: {description}</div>
    <div>Price: {price}</div>
    </>
  )
}

export default CartDetails