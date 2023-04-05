import "@/styles/globals.css";
import Navbar from "@/components/navbar";

export default function App({ Component, pageProps }) {
  return (
    <div className="w-4/5 justify-center m-auto">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
