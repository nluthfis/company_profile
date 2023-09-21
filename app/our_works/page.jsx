import React from "react";
import Image from "next/image";
import Banner from "./banner/banner";
// import Navbar from "../components/navbar/Navbar";
import Our_Works from "./our_works/our_works";
// import Footer from "../components/footer/Footer";

function Our_works() {
  const ourWorks = [
    {
      id: 1,
      title: "Nod Credit",
      type: "Mobile App",
      subject: "P2P lending app, now live on Google Playstore.",
      desc: "Discover how we’ve helped David & Seb build Asia’s leading coffee chain – by designing the experience of tech-enabled innovations.",
      tech: [
        "payment API integration",
        "User dashboard",
        "settings",
        "referral link",
        "beautiful animation",
      ],
      client: "Zurich Hong Kong",
      location: "Hong Kong",
      year: "2020",
      image: "/images/our-works/project1.png",
      img_details: [
        "/images/our-works/details/galery-hkgo-1.png",
        "/images/our-works/details/galery-hkgo-2.png",
        "/images/our-works/details/galery-hkgo-3.png",
      ],
    },
    {
      id: 2,
      title: "Feco Playbook",
      type: "Mobile App",
      subject: "P2P lending app, now live on Google Playstore.",
      desc: "Discover how we’ve helped David & Seb build Asia’s leading coffee chain – by designing the experience of tech-enabled innovations.",
      tech: [
        "Flutter",
        "Google Maps API",
        "Directions API",
        "Firebase cloud messaging (FCM)",
        "Firebase Database",
        "Google Analytics",
        "QR/Bar code scanning",
      ],
      client: "Feco Playbook",
      location: "Lagos, Nigeria",
      year: "2020",
      image: "/images/our-works/project2.png",
      img_details: [
        "/images/our-works/details/galery-hkgo-1.png",
        "/images/our-works/details/galery-hkgo-2.png",
        "/images/our-works/details/galery-hkgo-3.png",
      ],
    },
    {
      id: 3,
      title: "HKGO",
      type: "Mobile App",
      subject: "P2P lending app, now live on Google Playstore.",
      desc: "Discover how we’ve helped David & Seb build Asia’s leading coffee chain – by designing the experience of tech-enabled innovations.",
      tech: [
        "Flutter",
        "Google Maps API",
        "Directions API",
        "Firebase cloud messaging (FCM)",
        "Firebase Database",
        "Google Analytics",
        "QR/Bar code scanning",
      ],
      client: "Feco Playbook",
      location: "Lagos, Nigeria",
      year: "2020",
      image: "/images/our-works/project3.png",
      img_details: [
        "/images/our-works/details/galery-hkgo-1.png",
        "/images/our-works/details/galery-hkgo-2.png",
        "/images/our-works/details/galery-hkgo-3.png",
      ],
    },
    {
      id: 4,
      title: "JPCC",
      type: "Mobile App",
      subject: "P2P lending app, now live on Google Playstore.",
      desc: "Discover how we’ve helped David & Seb build Asia’s leading coffee chain – by designing the experience of tech-enabled innovations.",
      tech: [
        "Flutter",
        "Google Maps API",
        "Directions API",
        "Firebase cloud messaging (FCM)",
        "Firebase Database",
        "Google Analytics",
        "QR/Bar code scanning",
      ],
      client: "Feco Playbook",
      location: "Lagos, Nigeria",
      year: "2020",
      image: "/images/our-works/project4.png",
      img_details: [
        "/images/our-works/details/galery-hkgo-1.png",
        "/images/our-works/details/galery-hkgo-2.png",
        "/images/our-works/details/galery-hkgo-3.png",
      ],
    },
    {
      id: 5,
      title: "Naked Press",
      type: "Mobile App",
      subject: "P2P lending app, now live on Google Playstore.",
      desc: "Discover how we’ve helped David & Seb build Asia’s leading coffee chain – by designing the experience of tech-enabled innovations.",
      tech: [
        "Flutter",
        "Google Maps API",
        "Directions API",
        "Firebase cloud messaging (FCM)",
        "Firebase Database",
        "Google Analytics",
        "QR/Bar code scanning",
      ],
      client: "Feco Playbook",
      location: "Lagos, Nigeria",
      year: "2020",
      image: "/images/our-works/project5.png",
      img_details: [
        "/images/our-works/details/galery-hkgo-1.png",
        "/images/our-works/details/galery-hkgo-2.png",
        "/images/our-works/details/galery-hkgo-3.png",
      ],
    },
    {
      id: 6,
      title: "BNI Direct",
      type: "Mobile App",
      subject: "P2P lending app, now live on Google Playstore.",
      desc: "Discover how we’ve helped David & Seb build Asia’s leading coffee chain – by designing the experience of tech-enabled innovations.",
      tech: [
        "Flutter",
        "Google Maps API",
        "Directions API",
        "Firebase cloud messaging (FCM)",
        "Firebase Database",
        "Google Analytics",
        "QR/Bar code scanning",
      ],
      client: "Feco Playbook",
      location: "Lagos, Nigeria",
      year: "2020",
      image: "/images/our-works/project6.png",
      img_details: [
        "/images/our-works/details/galery-hkgo-1.png",
        "/images/our-works/details/galery-hkgo-2.png",
        "/images/our-works/details/galery-hkgo-3",
      ],
    },
  ];

  return (
    <>
      {/* <Navbar /> */}
      <Banner />
      <Our_Works items={ourWorks} />
      {/* <Footer /> */}
    </>
  );
}

export default Our_works;
