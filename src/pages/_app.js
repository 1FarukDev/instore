import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import '../styles/category.css'
export default function App({ Component, pageProps }) {
  return (
    <div className="lg:w-4/5 justify-center lg:m-auto px-2">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
