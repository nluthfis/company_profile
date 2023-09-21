import React from "react";
import { TypeAnimation } from "react-type-animation";

function Banner() {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col text-white d-flex flex-column justify-content-center "
          style={{ marginTop: "20%", marginBottom: "20%" }}
        >
          <h1 className="display-1 text-center fw-bold">URSAWHITE</h1>
          <div className="div d-flex justify-content-center ">
            <h1 className="display-3 fw-bold">Apps Is&nbsp;</h1>
            <TypeAnimation
              className="display-3 fw-bold"
              sequence={["Fast", 1500, "Easy", 1500]}
              repeat={Infinity}
            />
          </div>

          <p
            className="fs-5 fs-lg-3 mt-3 text-center"
            style={{ marginLeft: "10%", marginRight: "10%" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
