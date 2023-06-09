import Image from "next/image";
import chairimg from "@/Public/assets/images/desktop chair.png";
import button from "@/Public/assets/images/Button.png";
import Link from "next/link";
import DesktopChair from "@/components/dekstopChair";
const Chairs = ({ chair }) => {
  console.log(chair);
  return (
    <section className="mt-6">
      <header className="relative w-full ">
        <div>
          {" "}
          <Image src={chairimg} width={6000} />{" "}
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

      <main className="flex flex-wrap m-auto">
        {chair.result.map((cha) => {
          return (
            <div className=" flex flex-col m-auto">
              <div className=" h-full my-6 bg-gray-100 rounded-2xl">
                <div className="w-80 h-72">
                  <Image
                    src={cha.image}
                    width={500}
                    height={200}
                    className="w-full h-full rounded-2xl"
                  />
                </div>
                <div className="p-4">
                  <h2>{cha.title}</h2>
                  <h2>{cha.price}</h2>
                  {/* <h2>{cha.author.name}</h2> */}
                </div>
              </div>
            </div>
          );
        })}
      </main>
      <span className="lg:w-11/12 lg:m-auto">
        <DesktopChair />
      </span>
    </section>
  );
};

export default Chairs;

export async function getStaticProps(context) {
  const response = await fetch(
    "https://e1esx4r6.api.sanity.io/v2021-10-21/data/query/production?query=%2F%2F%20*%5B_type%20%3D%3D%20%22post%22%5D%7B%0A%2F%2F%20%20%20price%2C%0A%2F%2F%20%20%20%20%20author%20-%3E%20%7Bname%7D%2C%0A%2F%2F%20%20%20%20%20key%2C%0A%2F%2F%20%20%20%20%22image%22%3A%20mainImage.asset-%3Eurl%2C%0A%2F%2F%20%20%20%20%20categories%0A%2F%2F%20%7D%0A%0A*%5B_type%20%3D%3D%22post%22%26%26%22Chair%22%20in%20categories%5B%5D-%3Etitle%5D%7B%0A%22categories%22%3Acategories%5B%5D-%3Etitle%2C%0A%20%20title%2C%0A%20%20%22image%22%3A%20mainImage.asset-%3Eurl%2C%0A%20%20author%20-%3E%20%7Bname%7D%2C%0A%20%20price%2C%0A%20%20%0A%20%20%0A%20%20%22image%22%3A%20mainImage.asset-%3Eurl%2C%0A%7D%0A%0A%20%20%0A%20%20"
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
