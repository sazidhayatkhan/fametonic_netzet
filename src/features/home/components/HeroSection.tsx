import React from "react";
import { urbanist } from "@/fonts/fonts";
import clsx from "clsx";

const baseTextStyles = clsx(
  urbanist.className,
  "text-2xl md:text-4xl leading-[30px] md:leading-10 font-extrabold md:font-bold",
  "text-center md:text-start",
  "max-w-[21rem] md:max-w-full mx-auto md:mx-0"
);

const HeroSection = () => {
  return (
    <section>
      <h2 className={clsx(baseTextStyles, "max-w-[19rem]")}>
        Want to Turn Social Media Into a Profitable Career?
      </h2>
      <p
        style={{
          color: "#00E7F9",
          textShadow: "0px 4px 4px #FC004E",
        }}
        className={baseTextStyles}
      >
        Discover your way to success with Fametonic:
      </p>
    </section>
  );
};

export default HeroSection;
