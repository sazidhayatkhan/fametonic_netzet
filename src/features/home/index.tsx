import React from "react";
import { urbanist } from "@/fonts/fonts";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
    <div className="container grid grid-cols-1 md:grid-cols-2 items-center">
      <div className="order-2 md:order-1">
        <h2
          className={`${urbanist.className} text-2xl md:text-4xl font-extrabold md:font-bold text-center md:text-start`}
        >
          Want to Turn Social Media Into a Profitable Career?
        </h2>
        <p
          style={{
            color: "#00E7F9",
            textShadow: "0px 4px 4px #FC004E",
          }}
          className={`${urbanist.className} text-4xl font-bold text-center md:text-start`}
        >
          Discover your way to success with Fametonic:
        </p>
      </div>
      <div className="order-1 md:order-2">
        <Image
          src="/images/hero_img_sm.png"
          alt="hero_img_sm"
          width={666} // intrinsic size
          height={679} // intrinsic size
          // 376px
          className="w-full aspect-[7.6/7] object-cover"
        />
      </div>
    </div>
    <div className="h-[500px]"></div>
    </>
  );
};

export default HomePage;
