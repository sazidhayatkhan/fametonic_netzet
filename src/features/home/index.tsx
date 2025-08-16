import React from "react";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import CTASection from "./components/CTASection";

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
          <HeroSection/>
          <FeaturesSection/>
          <CTASection/>
        </div>
      </div>
  );
};

export default HomePage;
