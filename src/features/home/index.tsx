import React from "react";
import { urbanist } from "@/fonts/fonts";
import Image from "next/image";
import { descData } from "@/data/heroDescData";
import { FaAngleRight } from "react-icons/fa6";
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
          <div className="space-y-3 mt-4">
            {descData?.map((item, i: number) => (
              <p key={i} className="flex justify-start items-center gap-1">
                <span className="text-xl md:text-lg">✨</span>
                <span className="text-base font-medium md:font-semibold">
                  {item?.desc}
                </span>
              </p>
            ))}
          </div>
          <div className="mt-5 space-y-6 flex flex-col">
            <div className="order-2 md:order-1 w-full md:w-[313px] mt-6 md:mt-0">
              <button className="bg-[#FC004E] text-white text-xl font-bold h-[40px] w-full flex justify-center items-center gap-1 rounded-[10px] cursor-pointer">
                GET STARTED
                <span>
                  <img src="/icons/right.svg" alt="arrow" className="w-3 h-3" />
                </span>
              </button>
              <p className="mt-2 text-center font-normal text-xs">
                1-minute quiz for personalized Insights
              </p>
            </div>
            <div className="order-1 md:order-2 space-y-3">
              <p className="text-xs font-medium text-[#ABABAB] text-center md:text-start">
                By clicking "Get Started", you agree with Terms and Conditions,
                Privacy Policy, Subscription Terms
              </p>
              <p className="text-[10px] font-medium text-[#ABABAB] text-center md:text-start">
                Fametonic 2025 ©All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 max-w-[19rem] md:max-w-full mx-auto">
          <Image
            src="/images/hero_img.webp"
            alt="hero_img"
            width={666}
            height={679}
            priority
            className="w-full aspect-[12/11] object-cover"
          />
        </div>
      </div>
      <div className="h-[500px]"></div>
    </>
  );
};

export default HomePage;
