/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const ffBottom = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: () => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
    },
  }),
};

function Service() {
  const services = [
    {
      id: 1,
      title: "Front-end Development",
      description: ` We provide front-end development services to help you build
          your website. We also provide front-end development services
          to help you build your web application.`,
      img: "/images/services/frontend.png",
    },
    {
      id: 2,
      title: "Back-end Development",
      description: ` We provide back-end development services to help you build
          your website. We also provide back-end development services
          to help you build your web application.`,
      img: "/images/services/backend.png",
    },
    {
      id: 3,
      title: "CMS Implementation",
      description: ` We provide CMS implementation services to help you build
          your website. We also provide CMS implementation services
          to help you build your web application.`,
      img: "/images/services/cms.png",
    },
    {
      id: 4,
      title: "DevOps & Maintenance",
      description: ` We provide DevOps & Maintenance services to help you build
          your website. We also provide DevOps & Maintenance services
          to help you build your web application.`,
      img: "/images/services/devops.png",
    },
  ];
  return (
    <div className="container">
      <div className="">
        <h1 className="text-white fw-bold text-center mt-5">Services</h1>
        {services.map((item, index) => (
          <div
            className={`row d-flex justify-content-center align-items-center ${
              index % 2 !== 0 ? "flex-row-reverse" : ""
            }`}
            key={item.id}
          >
            <motion.div
              className="col-lg-6 order-lg-1 order-2"
              variants={ffBottom}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="d-flex flex-column ">
                <h2 className="text-white fw-bold ms-3 mb-3">{item.title}</h2>
                <h5 className="text-white ms-3 ">{item.description}</h5>
              </div>
            </motion.div>
            <motion.div
              className="col-lg-6 order-lg-2 "
              variants={ffBottom}
              initial="initial"
              whileInView="animate"
              animate="once"
              viewport={{ once: true }}
            >
              <div className="service d-flex justify-content-center">
                <img
                  className="img-fluid"
                  src={item.img}
                  width={400}
                  height={400}
                  style={{ objectFit: "contain" }}
                  alt="services"
                />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
