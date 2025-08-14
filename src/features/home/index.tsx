import React from "react";
import { urbanist } from "@/fonts/fonts";

const HomePage = () => {
  return (
    <div className="container grid grid-cols-2">
      <div>
        <h2 className={`${urbanist.className} text-4xl font-bold`}>
          Want to Turn Social Media Into a Profitable Career?
        </h2>
        <h2
          style={{
            color: "#00E7F9",
            textShadow: "0px 4px 4px #FC004E",
          }}
          className={`${urbanist.className} text-4xl font-bold text-[#00E7F9]`}
        >
          Discover your way to success with Fametonic:
        </h2>
      </div>
      <div className="w-full h-[400px] bg-gray-500">
        <p>image</p>
      </div>
    </div>
  );
};

export default HomePage;
