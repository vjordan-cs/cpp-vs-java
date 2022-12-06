import Head from "next/head";
import Image from "next/image";
import Dash from "../components/Dash";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rick King&apos;s C++ vs Java</title>
        <meta name="description" content="Rick King's C++ vs Java" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gray-100">
        <Dash />
        <Footer />
      </div>
    </div>
  );
}
