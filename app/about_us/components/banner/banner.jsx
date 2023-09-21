import React from "react";

function Banner() {
  return (
    <>
      <div
        className="container "
        style={{ marginTop: "20%", marginBottom: "20%", position: "relative" }}
      >
        <div className="row d-flex gx-3">
          <div
            className="h1 ms-3 fw-bold"
            style={{ color: "rgba(169,80,210,255)" }}
          >
            About Us
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
              We Help Startups And Companies Succeed
            </div>
          </div>

          <div className="col-lg-6 p-4 mt-4">
            <div className="h6 text-white ">
              Something big is happening in the world.
            </div>
            <div className="h6 text-white ">
              Companies digitally transforming their services, startups
              disrupting traditional business models, and innovation brought
              about by digital products - all are changing the way we live.
            </div>
            <div className="h6 text-white ">
              Why spend all your resources building something, and only
              realizing after 6 months of launching – nobody actually wants it?
            </div>
            <div className="h6  text-white ">
              {`That's why we're here. To help you ideate, validate, and test ideas
            in the most time and cost-effective manner.`}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
