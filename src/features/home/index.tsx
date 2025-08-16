import React from "react";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import CTASection from "./components/CTASection";
import HeroImage from "./components/HeroImage";

const HomePage = () => {
  return (
      <div className="container relative">
        <HeroImage/>
        <div className="relative z-20 pt-0 md:pt-8 max-w-full md:max-w-[33rem]">
          <HeroSection/>
          <FeaturesSection/>
          <CTASection/>
        </div>
      </div>
  );
};

export default HomePage;
