import { useEffect, useState } from "react";
const ProductPage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch(`/api/product`);
    const data = await response.json();
    setProducts(data.slice(0, 100));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <header className="flex m-auto mt-4">
        <div className="flex justify-center font-bold text-5xl text-center leading-lo w-full ">
          Explore What <br /> Your Home Needs{" "}
        </div>{" "}
      </header>
      <div className="w-full">
        {products.map((product) => {
          if (product.category.name === "Shoes") {
            return (
              <div key={product.id} className=" ">
                {product.id} {product.title} | {product.category.name}
                {product.images}
              </div>
            );
          } else "";
        })}
      </div>
    </>
  );
};

export default ProductPage;
