import { useEffect, useState } from "react";
import Image from "next/image";
import HomeImage from "@/Public/assets/images/Image.png";
import categories from "@/Data/categories";
// import Chair from "@/Public/assets/images/chair.png";
// import sofa from "@/Public/assets/images/sofa.png";
// import desk from "@/Public/assets/images/desk.png";
// import desk from ''
const ProductPage = () => {
  return (
    <>
      <Header />
      <PageImage />
      <CategoryList />
      {/* <h1>Hello World</h1> */}
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
    <section className="relative">
      {/* <div className="">
        <Image src={HomeImage} alt="Chairs Image" />
      </div>
      <div className="absolute left-6 top-32">
        <p className="font-bold ">
          High quality sofa <br /> <span className="text-3xl">30% off</span>
        </p>
      </div> */}
      <div className="relative text-center w-full">
        <div className="w-full">
          <Image src={HomeImage} alt="Chair Image" />
        </div>
        <span className="absolute top-1/2 text-center items-center left-6">
          {" "}
          <p className="font-bold ">
            High quality sofa <br />{" "}
            <span className="lg:text-3xl">30% off</span>
          </p>
        </span>
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

// const Category = () => {
//   return (
//     <section className="">
//       <h1 className="text-xl font-bold pl-2">Category</h1>
//       <div className="flex mt-2">
//         <div className="p-2 relative text-center text-white">
//           <div className="">
//             <Image src={Chair}  alt="Chair Image" />
//           </div>
//           <span className="absolute top-1/2 text-center items-center left-6">Chairs</span>
//         </div>
//         <div className="p-2 relative text-center text-white">
//           <div className="">
//             <Image src={sofa} alt="Chair Image" />
//           </div>
//           <span className="absolute top-1/2 text-center items-center left-6">Sofas</span>
//         </div>
//         <div className="p-2 relative text-center text-white">
//           <div className="">
//             <Image src={desk} alt="Chair Image" />
//           </div>
//           <span className="absolute top-1/2 text-center items-center left-6">Desk</span>
//         </div>

//       </div>
//     </section>
//   );
// };
const CategoryList = () => {
  return (
    <section className="">
      <h1 className="text-xl font-bold pl-2">Category</h1>
      {categories.map((category) => {
        return (
          <div key={category.key}>
            <div className="p-2 relative text-center text-white">
              <div className="">
                <Image src={`/../../public/assets/images/${category.Image}`} width={400} height={100} alt="Chair Image" />
              </div>
              <span className="absolute top-1/2 text-center items-center left-6">
               {category.name}
              </span>
            </div>
          </div>
        );
      })}
    </section>
  );
};
