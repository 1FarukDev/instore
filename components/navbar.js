import Image from "next/image";
import Logo from "@/Public/assets/icons/instor.png";
import cart from "@/Public/assets/icons/cart.png";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center pt-4 px-4">
      <div className=" lg:pl-0">
        <Image src={Logo} alt="Instor Logo" />
      </div>
      <div className="flex w-1/6 justify-between">
        <div>
        <Image src={cart} alt="Cart Logo" />
        </div>
        <div><Image src={cart} alt="Cart Logo" /></div>
      </div>
    </nav>
  );
};

export default Navbar;
