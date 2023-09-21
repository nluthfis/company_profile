"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// import "../../styles/navbar.scss";

function Navbar() {
  const [activeLink, setActiveLink] = useState("/");
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  return (
    <div className="">
      <nav className="navbar navbar-expand-lg fixed-top">
        <div
          className="container p-2"
          // style={{
          //   background: "rgba(0, 0, 0, 0.46)",
          //   borderRadius: "16px",
          //   boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          //   backdropFilter: "blur(13.7px)",
          //   WebkitBackdropFilter: "blur(13.7px)",
          // }}
        >
          <Link className="" href="/">
            <Image
              className="mt-1"
              src="/logo.png"
              width={width < 1024 ? "180" : "300"}
              height={width < 1024 ? "30" : "60"}
              // layout="responsive"
              priority
              alt="logo"
            />
          </Link>
          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <div className="navbar-toggler-icon"></div>
          </button>
          <div
            className="sidebar offcanvas offcanvas-start bg-dark "
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header border-bottom text-white">
              <div className="offcanvas-title" id="offcanvasNavbarLabel">
                <img
                  className="logo-logo img-fluid m-1"
                  src="/logo.png"
                  width={200}
                  height={80}
                  alt="logo"
                  style={{ objectFit: "contain", objectPosition: "left top" }}
                  priority
                />
              </div>
              <button
                type="button"
                className="btn-close btn-close-white shadow-none border-0 ms-5 me-3"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
              <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">
                <li className="stroke nav-item mx-2 fw-bold ">
                  <Link
                    className={`nav-link fs-6 ${
                      activeLink === "/" ? "active border-bottom border-3" : ""
                    }`}
                    id="linkHome"
                    aria-current="page"
                    href="/"
                    onClick={() => setActiveLink("/")}
                  >
                    <span className="text-white">Home</span>
                  </Link>
                </li>
                <li className="nav-item mx-2 fw-bold ">
                  <Link
                    className={`nav-link fs-6 ${
                      activeLink === "/our_works"
                        ? "active border-bottom border-3"
                        : ""
                    }`}
                    id="linkOurWorks"
                    href="/our_works"
                    onClick={() => setActiveLink("/our_works")}
                  >
                    <span className="text-white">Our Work</span>
                  </Link>
                </li>
                <li className="nav-item mx-2 fw-bold ">
                  <Link
                    className={`nav-link fs-6 ${
                      activeLink === "/about_us"
                        ? "active border-bottom border-3"
                        : ""
                    }`}
                    id="linkAboutUs"
                    href="/about_us"
                    onClick={() => setActiveLink("/about_us")}
                  >
                    <span className="text-white">About Us</span>
                  </Link>
                </li>
                <li className="nav-item mx-2 fw-bold ">
                  <Link
                    className={`nav-link fs-6 ${
                      activeLink === "/services"
                        ? "active border-bottom border-3"
                        : ""
                    }`}
                    id="link"
                    href="/services"
                    onClick={() => setActiveLink("/services")}
                  >
                    <span className="text-white">Services</span>
                  </Link>
                </li>
              </ul>
              <div className="d-flex justify-content-center flex-column">
                <button
                  type="button"
                  className="btn btn-secondary bg-transparent shadow-none border border-3 border-light "
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
