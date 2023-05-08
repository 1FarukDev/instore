import Image from "next/image";
import instagram from "@/Public/assets/images/instagram.png";
import pinterest from "@/Public/assets/images/pinterest.png";
import youtube from "@/Public/assets/images/youtube.png";
const Footer = () => {
  return (
    <section className="flex justify-between">
      <div className="flex w-1/6 justify-between ">
        <span>
          <Image src={instagram} />
        </span>
        <span>
          <Image src={pinterest} />
        </span>
        <span>
          <Image src={youtube} />
        </span>
      </div>
      <div><p className="text-gray-400">© Instor 2022</p></div>
      <div>c</div>
    </section>
  );
};

export default Footer;
