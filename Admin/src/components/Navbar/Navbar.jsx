import React from 'react'
import logo from '../../assets/Admin Panel Assets/nav-logo.svg'
import profilelogo from '../../assets/Admin Panel Assets/nav-profile.svg'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='Navbar'>
      <img className='logo' src={logo} alt=''/>
      <img className='plogo' src={profilelogo} alt=''/>
    </div>
  )
}

export default Navbar

