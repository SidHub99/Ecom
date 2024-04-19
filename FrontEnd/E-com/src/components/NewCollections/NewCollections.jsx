import React, { useEffect, useState } from 'react'
import './NewCollections.css'
import Item from '../item/Item'
// import new_collections from '../assets/data'
const NewCollections = () => {
  const [new_collections,Setnewcollections]=useState([])
  useEffect(()=>{
    const callnew=async()=>{
      await fetch('http://localhost:5000/newcollection').then((res)=>res.json()).then((data)=>Setnewcollections(data))
    }
    callnew()
  },[])
  return (
    <div className='new-collections'>
        <h1>New Collections</h1>
        <hr/>
        <div className="collections">
            {new_collections.map((item,i)=>{return <Item key={i} id={item.id} name={item.name} category={item.category} image={item.image} new_price={item.new_price} old_price={item.old_price} />})}
        </div>
      
    </div>
  )
}

export default NewCollections
