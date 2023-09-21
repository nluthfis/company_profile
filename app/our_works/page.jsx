import React from "react";
import Image from "next/image";
import Banner from "./banner/banner";
import Navbar from "../components/navbar/Navbar";
import Our_Works from "./our_works/our_works";
import Footer from "../components/footer/Footer";

function Our_works() {
  return (
    <>
      {/* <Navbar /> */}
      <Banner />
      <Our_Works />
      <Footer />
    </>
  );
}

export default Our_works;
