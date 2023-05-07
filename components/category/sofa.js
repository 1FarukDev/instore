import Image from "next/image";
import sofaimg from '@/Public/assets/images/sofa.png'
const Sofa = () => {
  return (
    <div className="flex lg:overflow-hidden overflow-scroll">
      <div  className="flex">
        <div className="p-2 relative text-center text-white categ">
          <div className="">
            <Image
              src={sofaimg}
              width={400}
              height={100}
              alt="Sofa Image"
            />
          </div>
          <span className="absolute top-1/2 text-center items-center left-6">
            <p>Sofa</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sofa;