import Image from "next/image";
import chairimg from "@/Public/assets/images/desktop chair.png";
import button from "@/Public/assets/images/Button.png";
import chairimg2 from "@/Public/assets/images/desktop chair 2.png";
import Link from "next/link";
const Chairs = ({ chair }) => {
  console.log(chair);
  return (
    <section className="mt-6">
      <header className="relative">
        <div>
          {" "}
          <Image src={chairimg} />{" "}
        </div>
        <div className="absolute top-1/3 flex left-6 items-center">
          <Link href="/">
            <span>
              <Image src={button} width={30} />
            </span>
          </Link>
          <span className="text-white font-bold text-3xl pl-4">Chairs</span>
        </div>
      </header>

      <main>
        {
          chair.result.map((cha) => {
            return (
              <div>
                <h2>{cha.price}</h2>
                <h2>{cha.author.name}</h2>
                <Image src={cha.image} width={200} height={200} />
              </div>
            );
          })
        }
      </main>

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
    </section>
  );
};

export default Chairs;

export async function getStaticProps(context) {
  const response = await fetch(
    "https://e1esx4r6.api.sanity.io/v2021-10-21/data/query/production?query=%2F%2F%20*%5B_type%20%3D%3D%20%22post%22%5D%7B%0A%2F%2F%20%20%20price%2C%0A%2F%2F%20%20%20%20%20author%20-%3E%20%7Bname%7D%2C%0A%2F%2F%20%20%20%20%20key%2C%0A%2F%2F%20%20%20%20%22image%22%3A%20mainImage.asset-%3Eurl%2C%0A%2F%2F%20%20%20%20%20categories%0A%2F%2F%20%7D%0A%0A*%5B_type%20%3D%3D%22post%22%26%26%22Chair%22%20in%20categories%5B%5D-%3Etitle%5D%7B%0A%22categories%22%3Acategories%5B%5D-%3Etitle%2C%0A%20%20price%2C%0A%20%20%22image%22%3A%20mainImage.asset-%3Eurl%2C%0A%20%20author%20-%3E%20%7Bname%7D%2C%0A%20%20%22image%22%3A%20mainImage.asset-%3Eurl%0A%0A%20%20%0A%20%20%0A%7D%0A%0A%20%20%0A%20%20"
  );
  const data = await response.json();
  console.log(data);
  return {
    // props: {
    //   chair: data,
    // },
    props: {
      chair: data,
    },
  };
}
