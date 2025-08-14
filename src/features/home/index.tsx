import React from "react";
import { urbanist } from "@/fonts/fonts";

const HomePage = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2">
      <div className="order-2 md:order-1">
        <h2 className={`${urbanist.className} text-2xl md:text-4xl font-extrabold md:font-bold text-center md:text-start`}>
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
      <div className="order-1 md:order-2 w-full h-[400px] bg-gray-500">
        <p>image</p>
      </div>
    </div>
  );
};

export default HomePage;
