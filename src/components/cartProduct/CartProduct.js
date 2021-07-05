import React from 'react'
import "./cartProduct.css";
import useCounter from '../../hooks/useCouner/useCounter';


export default function CartProduct({cart, removeFromCart}) {
    const [count, increment, decrement]= useCounter(0);
    const removeCart=(e)=>{
        e.preventDefault();
        removeFromCart(cart)
    }
   
    return (
        <div className="cart">
            <div className="cart-img">
                <img src={cart.img_url} alt="cart"/>
                <div className="counter"><button onClick={increment}>+</button><input type="number" value={count} readOnly></input><button onClick={decrement}>-</button></div>
            </div>
            <div className="cart-info">
                <h3>{cart.product_name}</h3>
                <h4>Rs : {cart.price}</h4>
                <span>-{cart.discount} off <p id="cart-brand-name">{cart.brand}</p></span>

                <div className="cart-btns">
                <span>Save for later</span>
                <span onClick={removeCart}>Remove</span>
            </div>
            </div>

          
        </div>
    )
}
