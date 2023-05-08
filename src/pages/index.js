import { useEffect, useState } from "react";
import Image from "next/image";
import HomeImage from "@/Public/assets/images/Image.png";
// import categories from "@/Data/categories";
import Sofa from "@/components/category/sofa";
import Desk from "@/components/category/desk";
import Chair from "@/components/category/chair";
import Link from "next/link";
const ProductPage = ({ properties }) => {
  console.log(properties);
  return (
    <>
      <Header />
      <PageImage />
      <div className="lg:flex lg:justify-between flex px-4">
        <Link href="/chairs">
          <Chair />
        </Link>
        <Link href="/sofas">
          <Sofa />
        </Link>
        <Link href='/desks'>
          <Desk />
        </Link>
      </div>
      {/* <CategoryList /> */}
      {/* <Data /> */}
      {/* <Popular /> */}
      {/* {properties.result.map((prop) => {
        return (
          <div key={prop.key} className="flex">
            <div className="p-2 relative text-center categ">
              <div className=""></div>
              <span className="">
                {prop.price}
                <Image src={prop.image} width={200} height={200} />
              </span>
            </div>
          </div>
        );
      })} */}
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
      <div className=" text-center w-full">
        <div className="">
          <Image src={HomeImage} alt="Chair Image" width={2500} />
        </div>
        <span className="absolute top-1/2 text-center items-center left-6">
          {" "}
          <p className="font-bold pl-10">
            High quality sofa <br />{" "}
            <span className="lg:text-3xl">30% off</span>
          </p>
        </span>
      </div>
    </section>
  );
};
// const CategoryList = () => {
//   return (
//     <section className="">
//       <h1 className="text-xl font-bold pl-2">Category</h1>
//       <div className="flex lg:overflow-hidden overflow-scroll">
//         {categories.map((category) => {
//           return (
//             <div key={category.key} className="flex">
//               <div className="p-2 relative text-center text-white categ">
//                 <div className="">
//                   <Image
//                     src={`/assets/images/${category.Image}`}
//                     width={400}
//                     height={100}
//                     alt="Chair Image"
//                   />
//                 </div>
//                 <span className="absolute top-1/2 text-center items-center left-6">
//                   {category.name}
//                 </span>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// const Popular = ({ wears }) => {
//   console.log(wears);
//   return <h1>Hello World</h1>;
// };
// const Data = () => {
//   const [products, setProducts] = useState([]);
//   const fetchProducts = async () => {
//     const response = await fetch(`/api/products`);
//     const data = await response.json();
//     setProducts(data);
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
//                 <Image src={product.images[1]} width={400} height={300}/>
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

// export async function getStaticProps() {
//   const response = await fetch(
//     "https://e1esx4r6.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D%7B%0Aauthor%20-%3E%20%7Bname%7D%2C%0A%20%20price%0A%7D%0A"
//   );
//   const data = await response.json();
//   // console.log(wea);
//   return {
//     props: {
//       wears: data,
//     },
//   };
// }
export async function getStaticProps(context) {
  const response = await fetch(
    "https://e1esx4r6.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D%7B%0A%20%20price%2C%0A%20%20%20%20author%20-%3E%20%7Bname%7D%2C%0A%20%20%20%20key%2C%0A%20%20%20%22image%22%3A%20mainImage.asset-%3Eurl%0A%7D%0A"
  );
  const data = await response.json();

  return {
    props: {
      properties: data,
    },
  };
}
