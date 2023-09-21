/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

function Project() {
  const searchParams = useSearchParams();
  const items = searchParams.get("items");
  const project = JSON.parse(items);

  return (
    <div className="container">
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ marginTop: "15%", marginBottom: "15%" }}
      >
        <div className="display-1 text-white text-center fw-bold">
          {project.title}
        </div>

        <div className="col-lg-4 ">
          <img
            className="img-fluid ms-5"
            src={project.image}
            width={300}
            height={300}
            alt={project.title}
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>
      <div className="row ">
        <div className="col-lg-2"></div>
        <div className="col-lg-6">
          <div className="display-2 text-white fw-bold">{project.title}</div>
          <h5 className="text-white mt-4">{project.subject}</h5>
          <p className="text-white mt-4">{project.desc}</p>
        </div>
        <div className="col-lg-4">
          <h6 className="text-left text-secondary fw-bold mt-4">Client</h6>
          <h6 className="text-left text-white fw-bold mt-4">
            {project.client}
          </h6>
          <h6 className="text-left text-secondary fw-bold mt-4">Location</h6>
          <h6 className="text-left text-white fw-bold mt-4">
            {project.location}
          </h6>
          <h6 className="text-left text-secondary fw-bold mt-4">Year</h6>
          <h6 className="text-left text-white fw-bold mt-4">{project.year}</h6>
          <h6 className="text-left text-secondary fw-bold mt-4">Services</h6>
          <h6 className="text-left text-white fw-bold mt-4">{project.type}</h6>
        </div>
      </div>
      <div className="row" style={{ marginTop: "15%", marginBottom: "15%" }}>
        <div className="col-lg-12">
          <h3 className="text-white text-center mb-5">Technologies</h3>
          {project.tech.map((item, index) => (
            <div
              className="d-flex border border-3 border-start-0 border-end-0 "
              key={index + 1}
            >
              <i
                className="bi bi-hash mt-3 mb-3"
                style={{ color: "white" }}
              ></i>
              <span className="h5 text-white text-center mt-3 mb-3 ms-3">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        {project.img_details.map((item) => (
          <div className="col-lg-4" key={item.id}>
            <img
              className="img-fluid mt-3 mb-3"
              src={item}
              alt="NodCredit"
              width={500}
              height={500}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
