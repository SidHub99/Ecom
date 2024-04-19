import React, { useEffect, useState } from 'react'
import './Listproduct.css'
import remove from '../../assets/Admin Panel Assets/cross_icon.png'
const Listproduct = () => {
  const [allproducts,Setallproducts]=useState([])
  const getdata=async()=>{
    await fetch('http://localhost:5000/getproducts').then((response)=>response.json()).then((data)=>Setallproducts(data))
  }
  const removeprod=async(id)=>{
    await fetch('http://localhost:5000/removeproduct',
      {
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify({id:id})
      }
  )
  getdata()
  }
  useEffect(()=>{
    getdata()
  },[])
  return (
    <div className='list-product'>
      <h1>List Products</h1>
      <div className="main">
      <p>Products</p>
      <p>Title</p>
      <p>Old Price</p>
      <p>New Price</p>
      <p>Category</p>
      <p>Remove</p>
      </div>
      
        <hr/>
        {
          allproducts.map((product,index)=>{
            return <>
            <div key={index} className="format main">
              <img src={product.image} alt="" className="icon" />
              <p>{product.name}</p>
              <p>${product.new_price}</p>
              <p>${product.old_price}</p>
              <p>{product.category}</p>
              <img src={remove} onClick={()=>{removeprod(product.id)}} alt="" className='remove' />
              
            </div>
            <hr />
            </>
          })
        }
      
      
    </div>
  )
}

export default Listproduct
