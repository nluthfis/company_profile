import React from "react";

function Banner() {
  return (
    <div
      className="container"
      style={{ marginTop: "20%", marginBottom: "20%" }}
    >
      <div
        className="h1 fw-bold ms-3"
        style={{ color: "rgba(169,80,210,255)" }}
      >
        Our Services
      </div>
      <div className="row d-flex gx-3">
        <div className="col-lg-6 p-4">
          <div
            className="display-3  fw-bold"
            style={{
              background:
                "linear-gradient(90deg, rgb(230, 212, 239) 0%, rgb(92, 4, 133) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {` Let's Build Great Product Together`}
          </div>
        </div>
        <div className="col-lg-6 p-4">
          <div className="display-5 text-white fw-bold">
            Web & Mobile Development
          </div>
          <h5 className="text-white ">
            Ursa White is a team who Create comprehensive and impactful sofware
            solutions spanning user experience and technical funtionality.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Banner;
