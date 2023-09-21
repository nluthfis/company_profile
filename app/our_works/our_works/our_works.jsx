// "use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";

function Our_works({ items }) {
  return (
    <div className="container ">
      <div className="row d-flex justify-content-center align-items-center ">
        {items.map((ourWork) => (
          <Link
            className="col-lg-6 col-md-6 mt-5 mb-5 d-flex flex-column justify-content-center align-items-center text-decoration-none"
            key={ourWork.id}
            items={ourWork}
            href={{
              pathname: `/our_works/project`,
              query: { items: JSON.stringify(ourWork) },
            }}
          >
            <img
              className="img-fluid"
              src={ourWork.image}
              width={300}
              height={300}
              alt={ourWork.title}
              style={{
                objectFit: "cover",
              }}
            />
            <h1 className="text-white text-center mt-5">{ourWork.title}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Our_works;
