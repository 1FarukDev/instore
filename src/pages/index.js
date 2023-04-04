import { useState } from "react"
const ProductPage = () =>{
    const [products, setProducts] = useState([])
    const fetchProducts = async () =>{
        const response = await fetch(`/api/product`)
        const data = await response.json()
        setProducts(data)
    }
    return(
    <>
    <button onClick={fetchProducts}>
        Load Comments
    </button>
      {
        products.map(product => {
            return(
                <div key={product.id}>
                    {product.id} {product.title}
                </div>
            )
        })
    } 

    </>
    )
}

export default ProductPage