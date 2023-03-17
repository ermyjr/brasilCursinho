import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head/>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;
