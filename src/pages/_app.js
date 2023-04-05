import "@/styles/globals.css";
import Navbar from "@/components/navbar";

export default function App({ Component, pageProps }) {
  return (
    <div className="lg:w-4/5 justify-center lg:m-auto ">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
