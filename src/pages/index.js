import { useState } from "react"
const ProductPage = () =>{
    
    const [products, setProducts] = useState([])
    
    const fetchProducts = async () =>{
        const response = await fetch(`/api/product?category=Shoes`)
        const data = await response.json()
        setProducts(data.slice(0, 100))
    }
    return(
    <>
    <button onClick={fetchProducts}>
        Load Comments
    </button>
      {
        products.map(product => {
            if(product.category.name === "Shoes"){
                return(
                    <div key={product.id} className="text-3xl text-red-500 underline">
                        {product.id} {product.title} | {product.category.name}
                    </div>
                )
            }else ""
        })
    } 

    </>
    )
}

export default ProductPage