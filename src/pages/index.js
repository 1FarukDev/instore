import { useEffect, useState } from "react";
import Image from "next/image";
import HomeImage from "@/Public/assets/images/Image.png";
import categories from "@/Data/categories";
const ProductPage = () => {
  return (
    <>
      <Header />
      <PageImage />
        <CategoryList />
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
      <div className="relative text-center w-full">
        <div className="w-full">
          <Image src={HomeImage} alt="Chair Image" />
        </div>
        <span className="absolute top-1/2 text-center items-center left-6">
          {" "}
          <p className="font-bold pl-2">
            High quality sofa <br />{" "}
            <span className="lg:text-3xl">30% off</span>
          </p>
        </span>
      </div>
    </section>
  );
};
const CategoryList = () => {
  return (
    <section className="">
      <h1 className="text-xl font-bold pl-2">Category</h1>
      <div className="flex lg:overflow-hidden overflow-scroll">
        {categories.map((category) => {
          return (
            <div key={category.key} className="flex">
              <div className="p-2 relative text-center text-white categ">
                <div className="">
                  <Image
                    src={`/assets/images/${category.Image}`}
                    width={400}
                    height={100}
                    alt="Chair Image"
                  />
                </div>
                <span className="absolute top-1/2 text-center items-center left-6">
                  {category.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
