import React from 'react';
import CartItem from './CartIteam';


export default function CartList({value}) {
    const {cart} = value;
    console.log(value, cart);
    return (
        <div className="container-fluid">
            {cart.map(item=> (
             < CartItem key={item.id} item={item} value={value}/>
            ))}   
           
        </div>
    )
}
