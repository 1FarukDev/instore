import Image from "next/image";
import deskimg from '@/Public/assets/images/desk.png'
const Desk = () => {
  return (
    <div className="flex lg:overflow-hidden overflow-scroll">
      <div  className="flex">
        <div className="p-2 relative text-center text-white categ">
          <div className="">
            <Image
              src={deskimg}
              width={400}
              height={100}
              alt="Sofa Image"
            />
          </div>
          <span className="absolute top-1/2 text-center items-center left-6">
            <p>desk</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Desk;