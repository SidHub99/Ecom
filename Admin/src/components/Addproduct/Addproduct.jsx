import React, { useState } from 'react'
import './Addproduct.css'
import upload_area from '../../assets/Admin Panel Assets/upload_area.svg'
const Addproduct = () => {
    const [image,Setimage]=useState('')
    const [productdetails,Setproductdetails]=useState({
        name:"",
        category:"women",
        image:"",
        new_price:"",
        old_price:""
    })
    const handlechange=(event)=>{
        Setproductdetails({
            ...productdetails,
            [event.target.name]:event.target.value,
        })
    }



    const imagehandler=(event)=>{
        Setimage(event.target.files[0])
    }
    const handlesubmit=async()=>{

      let responseData;
      let product=productdetails;
      let formdata= new FormData();
      formdata.append('product',image)
      await fetch('http://localhost:5000/upload', {
      method:'POST',
      headers:{Accept:'application/json',},    
      body:formdata,
  }).then((res)=>res.json()).then((data)=>{responseData=data});   
  
  if (responseData.success){
      product.image=responseData.image_url;
      if(product.name && product.category && product.image && product.new_price && product.old_price)
{      console.log(product)
      await fetch('http://localhost:5000/addproduct', {
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json',
        },    
        body:JSON.stringify(product),        
      }).then((res)=>res.json()).then((data)=> data.success?alert('Product added'):alert('Product not added'))
  }        
      Setproductdetails({
          name:"",
          category:"women",
          image:"",
          new_price:"",
          old_price:""
      })}else{
        alert("Fill all fields")
      }
  }
    return (
    
    <div className='addproduct'>

      <div className="item">
        <p>Product Title</p>
        <input type="text" name='name' value={productdetails.name} onChange={handlechange} placeholder='Item name'/>
      </div>
      <div className="price">
        <div className="item">
        <p>Old Price</p>
        <input type="text" name='old_price' value={productdetails.old_price} onChange={handlechange}  placeholder='Old Price'/>
        </div>
        <div className="item">
        <p>New Price</p>
        <input type="text" value={productdetails.new_price} onChange={handlechange} name='new_price' placeholder='New Price'/>
        </div>
      </div>
      <div className="item">
        <p>Product category</p>
        <select name='category' value={productdetails.category} onChange={handlechange} className='selector'>
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kid">Kids</option>
        </select>
      </div>
      <div className="item">
        <label htmlFor="file-input">
            <img src={image?URL.createObjectURL(image):upload_area } className='ii' alt=''/>
        </label>
        <input onChange={imagehandler} type='file' name='image' id='file-input' hidden/>
      </div>
      <button onClick={()=>{handlesubmit()}} className="add">Add </button>
    </div>
  )
}

export default Addproduct
