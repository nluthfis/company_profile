/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

function DocPhoto() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <img
            className="img-fluid mt-2 mb-2"
            src="/images/work.jpg"
            alt="ourteam"
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
          />
        </div>
        <div className="col-lg-6">
          <img
            className="img-fluid mb-2 mt-2"
            src="/images/work3.png"
            alt="ourteam"
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
          />
        </div>
      </div>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-6">
          <img
            className="img-fluid mb-2"
            src="/images/work2.png"
            alt="ourteam"
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

export default DocPhoto;
