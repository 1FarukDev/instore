import { useEffect, useState } from "react";
import Image from "next/image";
import HomeImage from "@/Public/assets/images/Image.png";
const ProductPage = () => {
  return (
    <>
      <Header />
      <PageImage />
      {/* <Category /> */}
      {/* <Data /> */}
    </>
  );
};

export default ProductPage;
const PageImage = () => {
  return (
    <section className="relative">
      <div className="absolute">
      <Image src={HomeImage} alt="Chairs Image" />
      </div>
      <div className="absolute left-3 top-32">
        <p className="font-bold ">High quality sofa <br /> <span className="text-3xl">30% off</span></p>
      </div>
    </section>
  );
};
// const Data = () => {
//   const [products, setProducts] = useState([]);

//   const fetchProducts = async () => {
//     const response = await fetch(`/api/product`);
//     const data = await response.json();
//     setProducts(data.slice(0, 100));
//   };
//   useEffect(() => {
//     fetchProducts();
//   }, []);
//   return (
//     <>
//       <div className="w-full">
//         {products.map((product) => {
//           if (product.category.name === "Watches") {
//             return (
//               <div key={product.id} className=" ">
//                 {product.id} {product.title} | {product.category.name}
//                 {product.images}
//               </div>
//             );
//           } else {
//             return ``;
//           }
//         })}
//       </div>
//     </>
//   );
// };
const Header = () => {
  return (
    <header className="flex m-auto my-4">
      <div className="flex justify-center font-bold text-5xl lg:text-center leading-lo w-full  ">
        Explore What <br /> Your Home Needs{" "}
      </div>{" "}
    </header>
  );
};
const Category = () => {
  return <h1>Helllo World</h1>;
};
