import Image from "next/image";
import Link from "next/link";
import chairimg from '@/Public/assets/images/chair.png'
const Chair = () => {
    return (
      <div className="flex lg:overflow-hidden overflow-scroll">
        <div  className="flex">
          <div className="p-2 relative text-center text-white categ">
            <div className="">
              <Image
                src={chairimg}
                width={400}
                height={100}
                alt="Chair Image"
              />
            </div>
            <span className="absolute top-1/2 text-center items-center left-6">
              <p>Chair</p>
            </span>
          </div>
        </div>
      </div>
    );
  };

export default Chair;
