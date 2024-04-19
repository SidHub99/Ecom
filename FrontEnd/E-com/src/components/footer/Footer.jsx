import React from 'react'
import './Footer.css'
import footer_logo from '../assets/logo_big.png'
import insta from '../assets/instagram_icon.png'
import pintrest from '../assets/pintester_icon.png'
import whatsapp from '../assets/whatsapp_icon.png'
const Footer = () => {
   return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt=""/>
            <p>Shopper</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
        </ul>
      <div className="footer-social">
        <div className="icon-container">
            <img src={insta} alt="" />
        </div>
        <div className="icon-container">
            <img src={pintrest} alt="" />
        </div>
        <div className="icon-container">
            <img src={whatsapp} alt="" />
        </div>

      </div>
      <div className="footer-copy">
        <hr />
        <p>All right Reserverd - copyright @ 2024</p>
      </div>
    </div>
  )
}
export default Footer