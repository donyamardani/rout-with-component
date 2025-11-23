import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import './style.css'

export default function Product() {
  const [products,setProducts]=useState();
  useEffect(
    ()=>{
      (
        async()=>{
          try {
            const res=await fetch('https://api.escuelajs.co/api/v1/products')
            const data=await res.json()
            setProducts(data)
          } catch (error) {
            console.log(error)
          }
        }
      )()
    },[]
  );
  const items=products?.map((e,index)=>
    <ProductCard key={index} title={e.title} description={e.description} image={e.category.image} price={e.price}/>
  )
  return (
    <>
    <div className='product-container'>
      {products && items}
    </div>
    </>
  )
}
