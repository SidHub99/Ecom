import React from 'react'
import '../RelatedProducts/Relatedproduct.css'
import Item from '../item/Item'
import data_product from '../assets/data'
const Relatedproducts = () => {
  return (
    <div className='relatedproducts'>
        <h1> Related Products</h1>
        <hr/>
        <div className="items">
            {
                data_product.map((item,i)=>{return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />})
            }
        </div>
      
    </div>
  )
}

export default Relatedproducts
