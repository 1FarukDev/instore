import Image from "next/image"
import chairimg2 from "@/Public/assets/images/desktop chair 2.png";
const DesktopChair = () =>{
    return(
        <header className="relative">
        <div>
          {" "}
          <Image src={chairimg2} width={20000} />{" "}
        </div>
        <div className="absolute top-1/3 left-10 ">
          <div className="font-bold text-3xl">Sale</div>
          <div>
            All chairs up to <br />
            <span className="font-bold"> 50% Off</span>{" "}
          </div>
          <div></div>
          <div></div>
        </div>
      </header>
    )
}
export default DesktopChair;