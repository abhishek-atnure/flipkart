import React from 'react'
import "./navigation.css";
import cart from "./cart.png";
import { Link } from "react-router-dom";

export default function Navigation({num}) {
    return (
        <div className="nav">
            <ul className="nav-ul">
              <Link to="/"><li id="nav-icon">Flipkart</li></Link>  
                <li><input type="text" id="searchBox" /></li>
                <li className="nav-login">Login</li>
               <Link to="/cart"><li id="nav-li-cart"><img id="cart-icon" src={cart} alt="cart"></img> <span>Cart</span><p id="bubble-icon">{num}</p></li></Link> 
            </ul>
        </div>
    )
}
