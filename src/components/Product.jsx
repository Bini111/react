import React from 'react'
import { Link } from 'react-router-dom'

const Product = (props) => {
    const markedPrice=props.product.price
    const discount_percent=props.product.discountPercentage
    const discount=(markedPrice*discount_percent)/100
    const sellingprice=(markedPrice-discount).toFixed(2)
  return (
     
         
    <div className='w-full bg-green-200 rounded-xl'>
              <img src={props.product.thumbnail}className='h-40 w-full object-contain' alt="" />
            <h1 className='mt-2 font-bold text-xl padding-2'>{props.product.title}</h1>
          <h2 className=' pl-2 line-through text-red-500 font-bold'>{markedPrice}</h2>
          <h2 className=' pl-2 text-blue-500 font-bold'>{sellingprice}</h2>
          <div className='bg-blue-500 py-2 px-4 w-full cursor-pointer text-white text-center rounded-xl m-2'>
          <Link to={"/products/"+props.product.id} className='py-2 px-4 rounded-lg text-white bg-orange-400 '>view</Link>

    </div>
    </div>
  
  )
}

export default Product
