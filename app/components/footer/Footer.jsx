import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className="row mt-5 gx-2">
        <div className="col-lg-6">
          <div className="card bg-secondary p-5">
            <h3 className="text-white">
              We’re a fun team of strategists, designers and developers
            </h3>
          </div>

          <img
            className="mt-2 mb-3 img-fluid rounded"
            src="/images/work.jpg"
            alt="ourteam"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="col-lg-6 d-flex flex-column mb-3 bg-secondary rounded p-5">
          <div className="">
            <h3 className="text-white mt-3">hello@helooo.hellooo</h3>
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
    </div>
  );
}

export default Footer;
