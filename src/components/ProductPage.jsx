import React, { useEffect } from 'react'
import { useState } from 'react'
import Product from './Product'

//const ProductPage = () => {

              function ProductPage (){
                const[products,setProducts]=useState([])
                  useEffect(()=>{
                    console.log("use effect called")
            fetch('https://dummyjson.com/products')
            .then(respose=>respose.json())
            .then(responsejson=>{
              console.log(responsejson)
              setProducts(responsejson.products)
           
              }) 
            },[])


  return (
    <div>
      <h1>This is product page</h1>

  < div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  
 
    {products.map(
       (product)=>{
        return(<Product key={product.id} product={product}/>)
       }


    )}

    </div>

    </div>
    
 
  )
}

export default ProductPage
