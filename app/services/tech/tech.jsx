import React from "react";
import Marquee from "../MarqueeLogo/marquee_logo";

function Tech() {
  return (
    <div className="container">
      <div className="technologies mt-5">
        <p
          className="text-center fw-bold"
          style={{ color: "rgba(169,80,210,255)" }}
        >
          Technologies Used
        </p>
        <h1 className="text-white text-center fw-bold">
          Technologies We Work With
        </h1>
        <p
          className="text-white text-center"
          style={{ marginLeft: "10%", marginRight: "10%" }}
        >
          As a premiere software development company, Innover helps to deliver
          scalable, complex, and future-ready solutions by utilising its unique
          frameworks & accelerators, broad range of programming languages,
          libraries and tools. Through Innover labs, we research, collaborate
          and co-innovate with our customers and technology partners to deliver
          path-breaking solutions with speed and precision.
        </p>
        <Marquee />
      </div>
      <div
        className="row mt-5 gx-1"
        style={{ marginTop: "20%", marginBottom: "20%" }}
      >
        <div className="col -lg-12 d-flex flex-column border border-3 p-5">
          <h1 className="text-white text-center fw-bold">
            {`Can't Find What you're Looking For?`}
          </h1>
          <p className="text-white text-center">
            Our team will be happy to help you
          </p>
          <button className="btn btn-secondary d-block mx-auto mt-5">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tech;
