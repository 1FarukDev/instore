import Image from "next/image";
import instagram from "@/Public/assets/images/instagram.png";
import pinterest from "@/Public/assets/images/pinterest.png";
import youtube from "@/Public/assets/images/youtube.png";
const Footer = () => {
  return (
    <section className="flex justify-between w-11/12 m-auto my-4">
      <div className="flex  justify-between ">
        <span className="px-2">
          <Image src={instagram} />
        </span>
        <span className="px-2">
          <Image src={pinterest} />
        </span>
        <span className="px-2">
          <Image src={youtube} />
        </span>
      </div>
      <div><p className="text-gray-400 ">© Instor 2022</p></div>
      <div>c</div>
    </section>
  );
};

export default Footer;
