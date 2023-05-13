import { useEffect, useState } from "react";
import Image from "next/image";
import HomeImage from "@/Public/assets/images/Image.png";
// import categories from "@/Data/categories";
import Sofa from "@/components/category/sofa";
import Desk from "@/components/category/desk";
import Chair from "@/components/category/chair";
import Link from "next/link";
import DesktopChair from "@/components/dekstopChair";
import add from '@/Public/assets/icons/add.png'

const ProductPage = ({ properties }) => {
  const slicedProduct = properties.result.slice(0, 5)
  const remainsProduct = properties.result.slice(5)
  console.log(properties);
  return (
    <>
      <Header />
      <PageImage />
      <div className="mx-6 text-2xl font-bold">
        <p>Categories</p>
      </div>
      <div className="lg:flex lg:justify-between  flex px-4">
        <Link href="/chairs">
          <Chair />
        </Link>
        <Link href="/sofas">
          <Sofa />
        </Link>
        <Link href="/desks">
          <Desk />
        </Link>
      </div>

      {/* <CategoryList /> */}
      {/* <Data /> */}
      {/* <Popular /> */}
      <div className="mx-6">
       <div className="flex justify-between items-center">
       <p className=" text-2xl font-bold">Popular</p>
        <p className="text-orange-300 text-xs">Scroll <span className="text-orange-300">{`>>`}</span></p>
       </div>
      </div>
      <div className="flex overflow-scroll  scrollbar-hide">
        {slicedProduct.map((prop) => {
          return (
            <div key={prop.key} className="flex flex-col px-8 m-auto">
              <div className=" h-full my-6 bg-gray-100 rounded-2xl">
                <div className="w-80 h-72">
                  <Image
                    src={prop.image}
                    width={500}
                    height={200}
                    className="w-full h-full rounded-2xl"
                  />
                </div>
                <div className="p-4 flex justify-between items-center">
                  <span>
                  <h2 className="text-gray-400">{prop.title}</h2>
                  <h2>{prop.price}</h2>
                  <h2>{prop.author.name}</h2>
                  </span>
                  <h2 className="bg-orange-200 p-2 rounded"><Image src={add}/></h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap">
        {remainsProduct.map((prop) => {
          return (
            <div key={prop.key} className="flex flex-col m-auto">
              <div className=" h-full my-6 bg-gray-100 rounded-2xl">
                <div className="w-80 h-72">
                  <Image
                    src={prop.image}
                    width={500}
                    height={200}
                    className="w-full h-full rounded-2xl"
                  />
                </div>
                <div className="p-4 flex justify-between items-center">
                  <span>
                  <h2 className="text-gray-400">{prop.title}</h2>
                  <h2>{prop.price}</h2>
                  <h2>{prop.author.name}</h2>
                  </span>
                  <h2 className="bg-orange-200 p-2 rounded"><Image src={add}/></h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <DesktopChair />
    </>
  );
};

export default ProductPage;

const Header = () => {
  return (
    <header className="flex m-auto my-4">
      <div className="flex justify-center font-bold text-5xl lg:text-center leading-lo w-full  ">
        Explore What <br />
        Your Home Needs{" "}
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
export async function getStaticProps(context) {
  const response = await fetch(
    "https://e1esx4r6.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D%7B%0A%20%20price%2C%0A%20%20%20%20author%20-%3E%20%7Bname%7D%2C%0A%20%20%20%20key%2C%0A%20%20%20%22image%22%3A%20mainImage.asset-%3Eurl%2C%0A%20%20%20%20categories%20-%3E%20%7B%0A%20%20%20%20%20%20name%20%0A%20%20%20%20%7D%2C%0A%20%20%20%20title%0A%20%20%0A%7D%0A%0A%0A%2F%2F%20*%5B_type%20%3D%3D%22post%22%26%26%22Chair%22%20in%20categories%5B%5D-%3Etitle%5D%7B%0A%2F%2F%20%22categories%22%3Acategories%5B%5D-%3Etitle%2C%0A%2F%2F%20%20%20title%2C%0A%2F%2F%20%20%20%22image%22%3A%20mainImage.asset-%3Eurl%2C%0A%2F%2F%20%20%20author%20-%3E%20%7Bname%7D%2C%0A%2F%2F%20%20%20price%2C%0A%20%20%0A%20%20%0A%2F%2F%20%20%20%22image%22%3A%20mainImage.asset-%3Eurl%2C%0A%2F%2F%20%7D%0A%0A%20%20%0A%20%20"
  );
  const data = await response.json();

  return {
    props: {
      properties: data,
    },
  };
}
