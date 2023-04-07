import { useEffect, useState } from "react";
import Image from "next/image";
import HomeImage from "@/Public/assets/images/Image.png";
import Chair from "@/Public/assets/images/chair.png";
const ProductPage = () => {
  return (
    <>
      <Header />
      <PageImage />
      <Category />
      {/* <Data /> */}
    </>
  );
};

export default ProductPage;

const Header = () => {
  return (
    <header className="flex m-auto my-4">
      <div className="flex justify-center font-bold text-5xl lg:text-center leading-lo w-full  ">
        Explore What <br /> Your Home Needs{" "}
      </div>{" "}
    </header>
  );
};
const PageImage = () => {
  return (
    <section className="relative h-96">
      <div className="absolute">
        <Image src={HomeImage} alt="Chairs Image" />
      </div>
      <div className="absolute left-3 top-32">
        <p className="font-bold ">
          High quality sofa <br /> <span className="text-3xl">30% off</span>
        </p>
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

const Category = () => {
  return (
    <section className="">
      <h1 className="text-xl font-bold">Category</h1>
      <div className="flex mt-2">
        <div className="p-2 relative text-center text-white">
          <div className="">
            <Image src={Chair} alt="Chair Image" />
          </div>
          <span className="absolute top-1/2 text-center items-center left-6">Chairs</span>
        </div>
        <div className="p-2">
          {" "}
          <div>
            <Image src={Chair} alt="Chair Image" />
          </div>
        </div>
        <div className="p-2">
          {" "}
          <div>
            <Image src={Chair} alt="Chair Image" />
          </div>
        </div>
      </div>
    </section>
  );
};
