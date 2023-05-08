import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import '../styles/category.css'
import Footer from "@/components/footer";
export default function App({ Component, pageProps }) {
  return (
    <div className="lg:w-4/5 justify-center lg:m-auto px-2">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
