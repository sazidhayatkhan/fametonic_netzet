import React from "react";
import { urbanist, nunito } from "@/fonts/fonts";
import Image from "next/image";
import { descData } from "@/data/heroDescData";

const HomePage = () => {
  return (
      <div className="container relative">
        <div className="block md:hidden max-w-[19rem] mx-auto">
          <Image
            src="/images/hero_img.webp"
            alt="hero_img"
            width={666}
            height={679}
            priority
            className="w-full aspect-[12/11] object-cover"
          />
        </div>
        <div className="z-10 hidden md:block absolute top-[-70px] right-[-105px]">
          <Image
            src="/images/hero_img.webp"
            alt="hero_img"
            width={666}
            height={679}
            priority
            className="w-full h-[679px] object-cover"
          />
        </div>
        <div className="relative z-20 pt-0 md:pt-8 max-w-full md:max-w-[33rem]">
          <div className="">
            <h2
              className={`${urbanist.className} text-2xl md:text-4xl leading-[30px] md:leading-10 font-extrabold md:font-bold text-center md:text-start max-w-[19rem] md:max-w-full mx-auto md:mx-0`}
            >
              Want to Turn Social Media Into a Profitable Career?
            </h2>
            <p
              style={{
                color: "#00E7F9",
                textShadow: "0px 4px 4px #FC004E",
              }}
              className={`${urbanist.className} text-2xl md:text-4xl leading-[30px] md:leading-10 font-extrabold md:font-bold text-center md:text-start max-w-[21rem] md:max-w-full mx-auto md:mx-0`}
            >
              Discover your way to success with Fametonic:
            </p>
          </div>
          <div className="space-y-3 mt-4">
            {descData?.map((item, i: number) => (
              <p key={i} className="flex justify-start items-center gap-2">
                <span className="text-xl md:text-lg">✨</span>
                <span className="text-base font-medium md:font-semibold">
                  {item?.desc}
                </span>
              </p>
            ))}
          </div>
          <div className="mt-5 md:mt-7 space-y-6 flex flex-col">
            <div className="order-2 md:order-1 w-full md:w-[313px] mt-3 md:mt-0">
              <button
                style={{
                  background: "#FC004E",
                  boxShadow: "2px 2px 10px 0px #00E7F9",
                }}
                className="bg-[#FC004E] text-white text-xl font-bold h-[40px] w-full flex justify-center items-center gap-2 rounded-[10px] cursor-pointer"
              >
                GET STARTED
                <span>
                  <img src="/icons/right.svg" alt="arrow" className="w-[13px] h-[14px]" />
                </span>
              </button>
              <p className="mt-3 text-center font-normal text-xs">
                1-minute quiz for personalized Insights
              </p>
            </div>
            <div className="order-1 md:order-2 space-y-5 md:space-y-3">
              <p className="text-xs font-medium text-[#ABABAB] text-center md:text-start max-w-[21rem] md:max-w-full mx-auto">
                By clicking "Get Started", you agree with Terms and Conditions,
                Privacy Policy, Subscription Terms
              </p>
              <p
                className={`block md:hidden ${nunito.className} text-[10px] font-medium text-[#ABABAB] text-center`}
              >
                Fametonic 2025 ©All Rights Reserved.
              </p>
              <p
                className={`hidden md:block ${urbanist.className} text-[10px] font-medium text-[#ABABAB] text-start`}
              >
                Fametonic 2025 ©All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
        
      </div>
  );
};

export default HomePage;
