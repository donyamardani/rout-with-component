import React from 'react'
import '../style.css'
export default function ProductCard({image,title, description,price}) {
  return (
    <>
  
    <div className="product-card">
      <img src={image} alt={title} className="product-img" />
       <div className='product-info'>
             
             <h3 className="product-title"> {title} </h3>

             <p className="product-description"> {description.split(" ").slice(0, 10).join(" ")}</p>

             <p className="product-price">${price}</p>

       </div>
       
             <button className="product-btn">
              مشاهده بیشتر
             </button>
            
    </div>



    </>
  )
}
