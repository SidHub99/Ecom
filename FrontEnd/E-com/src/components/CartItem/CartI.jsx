// import React, { useState } from 'react'


import { useContext } from 'react'
import '../CartItem/CartItem.css'
import { ShopContext } from '../Context/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'
const CartI = () => {

  // const[cartitems,Setcartitems]=useState([])
    

    const {orders,removefromcart}= useContext(ShopContext)
    // const addtocart=(item)=>{//here an item id will come
    //   Setcartitems((prev)=>{
    //     return {...prev,[item]:prev[item]+1}//will clone empty array of cart uptill 300 into prev
    //     //and then will see which item is in cart and then update its value by 1 lets say from 0 to 1
    //   })}
  return (
    
    <div className='cartitems'>
      <div className="main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
      {
        orders.map((e)=>{
            if (orders.length > 0 )
            {
                return <div>
                <div className="cart main">
                  <img src={e.image} alt='' className='product-icon' />
                  <p>{e.name}</p>
                  
                  <p>${e.price}</p>
                  <button className='quantity'>{e.quantity}</button>
                  <p>${e.price * e.quantity}</p>
                  <img className='remove' src={remove_icon} onClick={()=>{removefromcart(e.id,e.size)}} alt=''/>
                  
                </div>
                <hr/>
                </div>

            }
                else{
                    return <h1>No Orders to Display</h1>
                }
        })
      }
      <div className="cart-down">
        <div className="total">
            <h1>Cart Total</h1>
            <div className="subtotal">
                <p>Sub Total</p>
                <p>$0</p>
            </div>
        <hr/>
        <div className="subtotal">
            <p>Shipping</p>
            <p>Free</p>
        </div>
        <hr/>
        <div className="subtotal">
            <h3>Total</h3>
            <h3>$0</h3>
        </div>
        <button>Proceed to checkout</button>
        </div>
        <div className="promo">
            <p>Enter Promo Code</p>
            <div className="promocode">
                
            <input type="text" placeholder='Enter promo code' />
            <button>Apply</button>
            </div>
        </div>
      </div>

    </div>
  )
}

export default CartI

