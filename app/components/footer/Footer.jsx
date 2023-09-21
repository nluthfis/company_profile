/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="container ">
      <div className="row mt-5 gx-1">
        <div className="col-lg-6 border border-3 mb-3 d-flex flex-column align-items-center justify-content-center">
          <div className="p-5">
            <h2
              className="text-white fw-bold"
              style={{
                background:
                  "linear-gradient(90deg, rgb(230, 212, 239) 0%, rgb(92, 4, 133) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              We’re a fun team of strategists, designers and developers
            </h2>
          </div>

          <img
            className="mt-1 border border-3 mb-1 img-fluid "
            src="/images/work.jpg"
            alt="ourteam"
            style={{ objectFit: "contain", borderRadius: "0" }}
          />
        </div>
        <div className="col-lg-6 d-flex flex-column mb-3 border border-3 p-4 ">
          <h3 className="text-white mt-3">hello@helooo.com</h3>
          <p className="text-white">We love our inbox – drop us an email.</p>
          <h4 className="text-white mt-5">+628123123123</h4>
          <p className="text-white">Call Jeff, his line is open 24/7</p>

          <h4 className="text-white mt-5 ">@ursawhite</h4>
          <p className="text-white mb-5 ">
            Stalking us? Use this handle to find us on the interwebs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
