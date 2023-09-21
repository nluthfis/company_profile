import React from "react";
import Image from "next/image";

function Crew() {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ marginTop: "10%", marginBottom: "10%" }}
    >
      <div className="row ">
        <p
          className="text-center fw-bold"
          style={{ color: "rgba(169,80,210,255)" }}
        >
          THE LEADERSHIP CREW
        </p>
        <h1 className="text-center text-white fw-bold">Meet The Shipmates</h1>
        <div className="col-lg-3 col-sm-6 col-xs-6 mt-5 text-center">
          <Image
            src="/images/avatar/ava1.jpg"
            alt="ava1"
            width={200}
            height={200}
            style={{ objectFit: "contain" }}
          />
          <p className="text-white mt-3 mb-0">CEO</p>
          <p className="text-white">User1</p>
        </div>
        <div className="col-lg-3 col-sm-6 col-xs-6 mt-5 text-center">
          <Image
            src="/images/avatar/ava2.jpg"
            alt="ava2"
            width={200}
            height={200}
            style={{ objectFit: "contain" }}
          />
          <p className="text-white mt-3 mb-0">COO</p>
          <p className="text-white">User2</p>
        </div>
        <div className="col-lg-3 mt-5 col-sm-6 col-xs-6 text-center">
          <Image
            src="/images/avatar/ava3.jpg"
            alt="ava3"
            width={200}
            height={200}
            style={{ objectFit: "contain" }}
          />
          <p className="text-white mt-3 mb-0">CTO</p>
          <p className="text-white">User3</p>
        </div>
        <div className="col-lg-3 mt-5 col-sm-6 col-xs-6 text-center">
          <Image
            src="/images/avatar/ava4.jpg"
            alt="ava4"
            width={200}
            height={200}
            style={{ objectFit: "contain" }}
          />
          <p className="text-white mt-3 mb-0">CFO</p>
          <p className="text-white">User4</p>
        </div>
      </div>
    </div>
  );
}

export default Crew;
