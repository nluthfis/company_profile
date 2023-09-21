import React from "react";

function Banner() {
  return (
    <div className="container" style={{ marginTop: "10%" }}>
      <div className="h1 fw-bold" style={{ color: "purple" }}>
        Our Services
      </div>
      <div className="row d-flex gx-3">
        <div className="col-lg-6 p-4">
          <div className="display-3 text-white fw-bold">
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
