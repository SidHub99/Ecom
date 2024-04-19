import React, { useState } from 'react'
import { useContext } from 'react'
import './Navbar.css'
import { ShopContext } from '../Context/ShopContext'
import logo from '../assets/logo.png'
import cart from '../assets/cart_icon.png'
import { Link } from 'react-router-dom';
const Navbar=()=> {
  const {gettotalcartitems}=useContext(ShopContext);
    const [menu,setMenu]=useState("shop");
  return (
    <div className='Navbar'>
      <div className="logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <ul className='Nav-menu'>
        <li onClick={()=>{setMenu('shop')}}> <Link to="/" style={{textDecoration:'none'}}>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('men')}}> <Link to='/mens' style={{textDecoration:'none'}}>Men </Link>{menu==="men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('women')}}><Link to='/womens' style={{textDecoration:'none'}}> Women</Link> {menu==="women"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu('kids')}}><Link to='/kids' style={{textDecoration:'none'}}>Kids </Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="cart-btn">
        {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token')
        window.location.replace('/login')
      }}>Logout</button>:<Link to="/login"><button>Login</button></Link>}
        
        <Link to="/cart"><img src={cart} alt=""/></Link>
        <div className="Nav-counter">{gettotalcartitems()}</div>
      </div>
    </div>
  )
}
export default Navbar




