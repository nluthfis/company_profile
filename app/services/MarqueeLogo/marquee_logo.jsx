import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

function MarqueeLogo() {
  const image = [
    {
      src: "/images/logo-tech/bootstrap.png",
      alt: "bootstrap Logo",
    },
    {
      src: "/images/logo-tech/css.png",
      alt: "css",
    },
    {
      src: "/images/logo-tech/expressjs.png",
      alt: "expressjs",
      style: { backgroundColor: "white", padding: "1%" },
    },
    {
      src: "/images/logo-tech/firebase.png",
      alt: "firebase",
    },
    {
      src: "/images/logo-tech/html.png",
      alt: "html",
    },
    {
      src: "/images/logo-tech/js.png",
      alt: "js",
    },
    {
      src: "/images/logo-tech/materialui.png",
      alt: "materialui",
    },
    {
      src: "/images/logo-tech/mongodb.png",
      alt: "mongodb",
    },
    {
      src: "/images/logo-tech/mysql.png",
      alt: "mysql",
    },
    {
      src: "/images/logo-tech/nextjs.png",
      alt: "nextjs",
    },
    {
      src: "/images/logo-tech/nodejs.png",
      alt: "nodejs",
    },
    {
      src: "/images/logo-tech/postgresql.png",
      alt: "postgresql",
    },
    {
      src: "/images/logo-tech/react.png",
      alt: "react",
    },
    {
      src: "/images/logo-tech/tailwind.png",
      alt: "tailwind",
    },
    {
      src: "/images/logo-tech/typescript.png",
      alt: "typescript",
    },
  ];
  return (
    <div className="container">
      <Marquee
        speed={100}
        autoFill={true}
        gradient={true}
        gradientColor={[27, 27, 29]}
      >
        {image.slice(0, 8).map((item, index) => (
          <Image
            key={index}
            src={item.src}
            width={100}
            height={100}
            alt={item.alt}
            className="m-3"
          />
        ))}
      </Marquee>
      <Marquee
        speed={100}
        autoFill={true}
        gradient={true}
        gradientColor={[27, 27, 29]}
        direction={"right"}
      >
        {image.slice(8, 15).map((item, index) => (
          <Image
            key={index}
            src={item.src}
            width={100}
            height={100}
            alt={item.alt}
            className="m-3"
          />
        ))}
      </Marquee>
    </div>
  );
}

export default MarqueeLogo;
