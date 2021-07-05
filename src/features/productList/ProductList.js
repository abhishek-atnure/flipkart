import React from 'react'
import Product from "../../components/product/Product"
import "./productList.css"



export default function ProductList({allProductsData, addToCart}) {
    

    return (
        <div className="product-list">
            {allProductsData.map((product)=>(
            <Product product={product} key={product.id} addToCart={addToCart}/>
            ))}
        </div>
    )
}
