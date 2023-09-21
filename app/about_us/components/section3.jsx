import React from "react";

function Section3() {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ marginTop: "10%", marginBottom: "10%" }}
    >
      <div className="row ">
        <div className="display-4 text-center text-white">
          {` We're a team of strategists, designers, developers, storytellers,
          workshoppers and Mario Kart racers.`}
        </div>

        <div className="col-lg-4 mt-5">
          <div className="card p-4 bg-secondary">
            <h5 className="text-white fw-bold">WORKSHOPS</h5>
            <p className="text-white m-0">Design Sprints</p>
            <p className="text-white m-0">Lightning Decision Jams</p>
            <p className="text-white m-0">Brand Sprints</p>
          </div>
        </div>
        <div className="col-lg-4 mt-5">
          <div className="card p-4 bg-secondary">
            <h5 className="text-white fw-bold">PRODUCT DESIGN</h5>
            <p className="text-white m-0">User Experience</p>
            <p className="text-white m-0">User Interface</p>
            <p className="text-white m-0">Illustration</p>
            <p className="text-white m-0">Motion Graphics</p>
            <p className="text-white m-0">Branding</p>
          </div>
        </div>
        <div className="col-lg-4 mt-5">
          <div className="card p-4 bg-secondary">
            <h5 className="text-white fw-bold">DEVELOPMENT</h5>
            <p className="text-white m-0">Frontend Development</p>
            <p className="text-white m-0">Backend Development</p>
            <p className="text-white m-0">Mobile Development</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
