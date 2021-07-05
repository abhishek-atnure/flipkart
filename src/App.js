import './App.css';
import React, { useState, useEffect } from "react";
import allProductsData from "./productData";
import Navigation from "./components/navigation/Navigation"
import ProductList from "./features/productList/ProductList"
import CartList from "./features/cartList/CartList"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const [carts, setCarts]= useState([]);
  const [ numOfCarts, setNumOfCarts]= useState(0);

  const addToCart=(product)=>{
    console.log(product)
    setCarts((prevProduct)=>[...prevProduct, product])
   
  }

  const removeFromCart=(cart)=>{
    const data=carts.filter((element)=> element.id !== cart.id)
    setCarts(data)
    
  }
  
  useEffect(()=>{
    setNumOfCarts(carts.length)
  },[carts]);

  return (
    <Router>
    <div className="App">
      <Navigation num={numOfCarts}/>
      <switch>
        <Route path="/"  exact render={(props)=> <ProductList allProductsData={allProductsData} addToCart={addToCart}/>}/>
        <Route path="/cart" exact  render={(props)=>      <CartList carts={carts} removeFromCart={removeFromCart}/>}/>
      </switch>
    </div>
    </Router>
  );
}

export default App;
