import React from 'react'
import '../Productdisplay/Productdisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull from '../assets/star_dull_icon.png'
import { ShopContext } from '../Context/ShopContext'
import { useContext } from 'react'
const Productdisplay = (props) => {
    const{product}=props
    const{addtocart}=useContext(ShopContext)
  return (
    <div className='productdisplay'>
        <div className="left">
            <div className="img-lst">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="img">
            <img className='main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="right">
            <h1>{product.name}</h1>
            <div className="right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull} alt="" />
                <p>(121)</p>
            </div>
            <div className="right-prices">
                <div className="old"><p>${product.old_price}</p></div>
                <div className="new"><p>${product.new_price}</p></div>
            </div>
            <div className="description"><p>product description</p></div>
            <div className="size">
                <h1>
                    Select size
                </h1>
                <div className="sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>

                </div>
            </div>
            <button onClick={()=>{addtocart(product.id)}}>Add to Cart</button>
            <p className='category'><span>Category : </span> Women, Tshirt, Top</p>
            <p className='category'><span>Tags : </span> Modern, Latest</p>
        </div>
      
    </div>
  )
}

export default Productdisplay
