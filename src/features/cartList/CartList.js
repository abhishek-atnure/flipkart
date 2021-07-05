import React ,{ useState , useEffect} from 'react';
import CartProduct from '../../components/cartProduct/CartProduct';
import "./cartList.css"


export default function CartList({carts, removeFromCart}) {
    const [price, setPrice]= useState(null);
    const [ discount, setDiscount]= useState(null);
    const [total, setTotal]= useState(null);

 

    useEffect(() => {
        const amountSummery=()=>{
            carts.forEach((element)=>{
                setPrice((prevPrice)=> prevPrice + element.price);
                setDiscount((prevDiscount)=> prevDiscount + element.discount);
                
            });
            setTotal(40 + price )
        }
        amountSummery();
    }, [carts, price, discount, total,removeFromCart])
    
    return (
        <div className="cart-container">
                <div className="cart-list">
                    {carts.map((cart)=>(
                        
                    <CartProduct cart={cart} key={cart.id} removeFromCart={removeFromCart}/>
                    ))}
                </div>
            <div className="amount-section"> 
         
                <h3>Price Details</h3>
                <hr></hr>
                    <div id="price-times">
                        <h4>Price( 2 items)</h4>
                        <span>Rs: {price}</span>
                    </div>

                    <div id="price-discount">
                        <h4>Discount</h4>
                        <span>Rs {discount}</span>
                    </div>

                    <div id="price-delivery">
                        <h4>Delivery Charge</h4>
                        <span>Rs 40</span>
                    </div>
                <hr></hr>

                <div id="price-total">
                        <h4>Total Amount</h4>
                        <span>Rs {total}</span>
                    </div>
             
            </div>
         
            
        </div>
    )
}
