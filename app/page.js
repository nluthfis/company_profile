"use client";
import Image from "next/image";
// import styles from "./page.module.css";
// import Navbar from "../app/components/navbar/Navbar";
// import Footer from "../app/components/footer/Footer";
import Banner from "./home/components/banner/banner";
import Our_Clients from "./home/components/our_clients/our_clients";
import Our_Works from "./home/components/our_works/our_works";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Banner />
      <Our_Clients />
      <Our_Works />
      {/* <Footer /> */}
    </>
  );
}
