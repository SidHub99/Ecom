import React from 'react'
import './Offer.css'
import exclusive from '../assets/exclusive_image.png'
const Offer = () => {
  return (
    <div className='offer'>
        <div className="offer-left">
            <h1>Exclusive</h1>
            <h1>Offers for You</h1>
            <p>Only Best Sellers</p>
            <button>Check now</button>
        </div>
        <div className="offer-right">
            <img src={exclusive} alt=""/>
        </div>
      
    </div>
  )
}

export default Offer
