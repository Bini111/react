console.log("hello")
fetch('https://dummyjson.com/products')
.then((response)=>
    {return response.json()
    })
.then((jsonData)=>{
    console.log(jsonData.products.map((product)=>`${product.title},price.${product.price}`))
})