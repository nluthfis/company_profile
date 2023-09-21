import React from "react";

function Banner() {
  return (
    <div
      className="container"
      style={{ marginTop: "20%", marginBottom: "20%" }}
    >
      <div className="row d-flex gx-3">
        <div
          className="h1 ms-3 fw-bold"
          style={{ color: "rgba(169,80,210,255)" }}
        >
          Our Works
        </div>
        <div className="col-lg-6 p-4">
          <div
            className="display-3 fw-bold"
            style={{
              background:
                "linear-gradient(90deg, rgb(230, 212, 239) 0%, rgb(92, 4, 133) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            We are a digital design agency
          </div>
        </div>
        <div className="col-lg-6 p-4">
          <div className="h1 text-white fw-bold">
            Our clients varied from small startup to medium sized corporate
          </div>
          <p className="text-white ">
            As a Software House that designs and develops web apps, mobile apps,
            and PWAs since 2013, we have been trusted by our clients from
            America, Europe, Australia, and Asia.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
