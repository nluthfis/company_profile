import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const fadeInRight = {
  initial: {
    opacity: 0,
    x: 150,
  },
  animate: () => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
    },
  }),
};

const fadeInLeft = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: () => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
    },
  }),
};

function Our_works() {
  const portfolio = [
    {
      name: "NodCredit",
      type: "Mobile App",
      subject: "P2P lending app, now live on Google Playstore.",
      image: "/images/our-works/mockup1.png",
      desc: "Discover how we’ve helped David & Seb build Asia’s leading coffee chain – by designing the experience of tech-enabled innovations.",
      tech: [
        "payment API integration",
        "User dashboard",
        "settings",
        " referral link",
        "beautiful animation",
      ],
    },
    {
      name: "Feco Playbook",
      type: "Mobile App",
      subject: "P2P lending app, now live on Google Playstore.",
      image: "/images/our-works/mockup2.png",
      desc: "Discover how we’ve helped David & Seb build Asia’s leading coffee chain – by designing the experience of tech-enabled innovations.",
      tech: [
        "Flutter",
        "Google Maps API",
        "Directions API",
        " Firebase cloud messaging (FCM)",
        "Firebase Database",
        "Google Analytics",
        "QR/Bar code scanning",
      ],
    },
    {
      name: "HKGO",
      type: "Mobile App",
      subject:
        "HKGO is a location-based app (Google Maps) with flutter for a big insurance company in Hong Kong.",
      image: "/images/our-works/mockup3.png",
      desc: "Discover how we’ve helped David & Seb build Asia’s leading coffee chain – by designing the experience of tech-enabled innovations.",
      tech: [
        "payment API integration",
        "User dashboard",
        "Settings",
        "Referral link",
        "Beautiful animation",
      ],
    },
  ];
  return (
    <div className="container">
      <div
        className="row d-flex justify-content-center align-items-center "
        style={{ marginLeft: "10%", marginRight: "10%" }}
      >
        <h1
          className="text-center fw-bold mt-5 mb-5"
          style={{
            background:
              "linear-gradient(90deg, rgb(230, 212, 239) 0%, rgb(92, 4, 133) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Our Works
        </h1>

        {portfolio.map((item, index) => (
          <div className="row" key={index}>
            <motion.div
              className="col-lg-6 order-lg-2 d-flex justify-content-center align-items-center mt-5 mb-5"
              variants={fadeInRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div>
                <Image
                  className="img-fluid"
                  src={item.image}
                  width={300}
                  height={300}
                  style={{
                    objectFit: "contain",
                    width: "auto",
                    height: "auto",
                  }}
                  alt="logo"
                />
              </div>
            </motion.div>
            <motion.div
              className="col-lg-6 order-lg-1"
              variants={fadeInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h1 className="title fw-bold text-white">{item.name}</h1>
              <h6 className="subtitle text-white">{item.subject}</h6>
              <p className="text-white ">{item.desc}</p>
              <ul className="list text-white">
                {item.tech.map((techItem, index) => (
                  <li key={index}>
                    <i className="item">{techItem}</i>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
        <button className="btn bg-transparent border shadow-0 mt-3 mb-3">
          <span className="text-white">Show More</span>
        </button>
      </div>
    </div>
  );
}

export default Our_works;
