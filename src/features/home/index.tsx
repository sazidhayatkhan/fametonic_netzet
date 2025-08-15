import React from "react";
import { urbanist } from "@/fonts/fonts";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="order-2 md:order-1">
          <div className="">
            <h2
              className={`${urbanist.className} text-2xl md:text-4xl font-extrabold md:font-bold text-center md:text-start max-w-[19rem] md:max-w-full mx-auto md:mx-0`}
            >
              Want to Turn Social Media Into a Profitable Career?
            </h2>
            <p
              style={{
                color: "#00E7F9",
                textShadow: "0px 4px 4px #FC004E",
              }}
              className={`${urbanist.className} text-2xl md:text-4xl font-extrabold md:font-bold text-center md:text-start max-w-[21rem] md:max-w-full mx-auto md:mx-0`}
            >
              Discover your way to success with Fametonic:
            </p>
          </div>
          <div>
            <p>✨ Start growing your influence right away—no waiting required!</p>
            <p>✨ Start growing your influence right away—no waiting required!</p>
            <p>✨ Start growing your influence right away—no waiting required!</p>
            <p>✨ Start growing your influence right away—no waiting required!</p>
            
          </div>
        </div>
        <div className="order-1 md:order-2 max-w-[19rem] md:max-w-full mx-auto">
          <Image
            src="/images/hero_img.png"
            alt="hero_img"
            width={666}
            height={679}
            // 376px
            className="w-full aspect-[12/11] object-cover"
          />
        </div>
      </div>
      <div className="h-[500px]"></div>
    </>
  );
};

export default HomePage;
