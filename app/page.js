"use client";
import Image from "next/image";
// import styles from "./page.module.css";
import { TypeAnimation } from "react-type-animation";
import Navbar from "../app/components/navbar/Navbar";
import Footer from "../app/components/footer/Footer";
import Our_Clients from "../app/home/components/our_clients";
import Our_Works from "../app/home/components/our_works";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="container">
        <div className="row " style={{ marginLeft: "10%", marginRight: "10%" }}>
          <div
            className="col  text-white d-flex flex-column justify-content-center "
            style={{ width: "100%", height: "100vh" }}
          >
            <h1 className="display-1 text-center fw-bold">URSAWHITE</h1>
            <div className="div d-flex justify-content-center align-items-center">
              <h1 className="display-3 fw-bold">Apps Is&nbsp;</h1>
              <TypeAnimation
                className="display-3 fw-bold"
                sequence={["Fast", 1500, "Easy", 1500]}
                repeat={Infinity}
              />
            </div>

            <p
              className="fs-5 fs-lg-3 mt-3 text-center"
              style={{ marginLeft: "10%", marginRight: "10%" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
      <Our_Clients />
      <Our_Works />
      <Footer />
    </>
  );
}
