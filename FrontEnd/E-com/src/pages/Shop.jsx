import React from 'react'
import Hero from '../components/hero/Hero'
import Popular from '../components/popular/Popular'
import Offer from '../components/offers/Offer'
import NewCollections from '../components/NewCollections/NewCollections'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import Relatedproducts from '../components/RelatedProducts/Relatedproducts'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollections/>
      <NewsLetter/>
      <Relatedproducts/>
    </div>
  )
}

export default Shop
