import React from 'react'
import "./product.css"

export default function Product({product, addToCart}) {
  

    const handleCart=(e)=>{
        e.preventDefault();

        addToCart(product)
    }
    const data=product
    return (
        <div className="product">
            <img id="product-img" src={data.img_url} alt="product"/>
            <div className="product-info">
                <h3>{data.product_name}</h3>
                <h4>Rs : {data.price}</h4>
                <p>-{data.discount} off<span id="brand-name">{data.brand}</span></p>
                <button onClick={handleCart}>Add to cart</button>
            </div>
        </div>
    )
}
