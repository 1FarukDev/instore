import { useEffect, useState } from "react";
import Image from "next/image";
import HomeImage from "@/Public/assets/images/Image.png";
// import categories from "@/Data/categories";
import Sofa from "@/components/category/sofa";
import Desk from "@/components/category/desk";
import Chair from "@/components/category/chair";
import Link from "next/link";
import DesktopChair from "@/components/dekstopChair";
const ProductPage = ({ properties }) => {
  console.log(properties);
  return (
    <>
      <Header />
      <PageImage />
      hhgh
      <div className="lg:flex lg:justify-between  flex px-4">
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
      <div className="flex flex-wrap">
      {properties.result.map((prop) => {
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
        Explore What <br />a Your Home Needs{" "}
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
    "https://e1esx4r6.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D%7B%0A%20%20price%2C%0A%20%20%20%20author%20-%3E%20%7Bname%7D%2C%0A%20%20%20%20key%2C%0A%20%20%20%22image%22%3A%20mainImage.asset-%3Eurl%0A%7D%0A"
  );
  const data = await response.json();

  return {
    props: {
      properties: data,
    },
  };
}
