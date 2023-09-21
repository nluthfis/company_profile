import React from "react";
import Image from "next/image";

function Our_works() {
  const ourWorks = [
    {
      id: 1,
      title: "Nod Credit",
      src: "/images/our-works/project1.png",
      alt: "NodCredit",
      linkTo: "/ourworks/nod_credit",
    },
    {
      id: 2,
      title: "Feco Play",
      src: "/images/our-works/project2.png",
      alt: "FecoPlay",
      linkTo: "/ourworks/feco_play",
    },
    {
      id: 3,
      title: "HKGO",
      src: "/images/our-works/project3.png",
      alt: "HKGO",
      linkTo: "/ourworks/hkgo",
    },
    {
      id: 4,
      title: "JPCC",
      src: "/images/our-works/project4.png",
      alt: "JPCC",
      linkTo: "/ourworks/jpcc",
    },
    {
      id: 5,
      title: "Naked Press",
      src: "/images/our-works/project5.png",
      alt: "NakedPress",
      linkTo: "/ourworks/naked_press",
    },
    {
      id: 6,
      title: "BNI Direct",
      src: "/images/our-works/project6.png",
      alt: "BNIDirect",
      linkTo: "/ourworks/bni_direct",
    },
  ];
  return (
    <div className="container ">
      <div className="row ">
        {ourWorks.map((ourWork) => (
          <div
            className="col-lg-6 col-md-6 mt-5 mb-5 d-flex flex-column justify-content-center align-items-center "
            key={ourWork.id}
          >
            <Image
              className="img-fluid"
              src={ourWork.src}
              width={300}
              height={300}
              alt={ourWork.title}
              style={{
                objectFit: "contain",
                marginLeft: "10%",
                marginRight: "10%",
                width: "auto",
                height: "auto",
              }}
            />
            <h1 className="text-white text-center mt-5">{ourWork.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Our_works;
