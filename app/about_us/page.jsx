import React from "react";
import Navbar from "../components/navbar/Navbar";
import Banner from "./components/banner";
import DocPhoto from "./components/doc_photo";
import Section3 from "./components/section3";
import Crew from "./components/crew";
import Footer from "../components/footer/Footer";

function AboutUs() {
  return (
    <>
      {/* <Navbar /> */}
      <Banner />
      <DocPhoto />
      <Section3 />
      <Crew />
      <Footer />
    </>
  );
}

export default AboutUs;
