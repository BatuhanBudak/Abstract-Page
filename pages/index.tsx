import type { NextPage } from "next";
import Header from "../components/Header";
import Help from "../components/Help";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Help />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
