import React from "react";
// import Navbar from "../components/navbar/Navbar";
// import Footer from "../components/footer/Footer";
import Banner from "./components/banner/banner";
import DocPhoto from "./components/doc_photo/doc_photo";
import Section3 from "./components/sec_3/section3";
import Crew from "./components/crew/crew";

function AboutUs() {
  return (
    <>
      <Banner />
      <DocPhoto />
      <Section3 />
      <Crew />
      {/* <Footer /> */}
    </>
  );
}

export default AboutUs;
