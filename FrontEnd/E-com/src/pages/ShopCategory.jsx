import {React ,useContext} from 'react'
import './Css/Shopcategory.css'
import dropdown_icon from '../components/assets/dropdown_icon.png'
import { ShopContext } from '../components/Context/ShopContext'
import Item from '../components/item/Item'
import './Css/Shopcategory.css'

const ShopCategory = (props) => {
  const {all_product}=useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt=""/>
      <div className="shopcategory-index">
        <p>
          <span>Showing 1-12 </span>out of 36 products
        </p>
          
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
        </div>
        <div className="shopcategory-products">
          {all_product.map((item,i)=>{
            if(item.category === props.category){
              return <Item key={i} id={item.id} name={item.name} image={item.image} category={item.category} new_price={item.new_price} old_price={item.old_price}/>
            }
            else{ return null;}
          })}
        </div>
      
      <div className="loadmore">
        Explore more
      </div>
    </div>
  )
}

export default ShopCategory
