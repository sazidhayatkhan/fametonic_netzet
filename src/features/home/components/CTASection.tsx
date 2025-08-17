"use client";
import React from "react";
import Button from "@/components/ui/Button";
import { urbanist, nunito } from "@/fonts/fonts";
import clsx from "clsx";

const CTASection = () => {
  const footerBase = "text-[10px] font-medium text-[#ABABAB]";

  return (
    <section className={clsx("mt-5 md:mt-7 space-y-6 flex flex-col")}>
      <div className={clsx("order-2 md:order-1 w-full md:w-[313px] mt-3 md:mt-0")}>
        <Button iconSrc="/icons/right.svg" onClick={() => alert("Clicked!")}>
          GET STARTED
        </Button>
        <p className={clsx("mt-3 text-center font-normal text-xs")}>
          1-minute quiz for personalized Insights
        </p>
      </div>
      <div className={clsx("order-1 md:order-2 space-y-5 md:space-y-3")}>
        <p
          className={clsx(
            "text-xs font-medium text-[#ABABAB]",
            "text-center md:text-start",
            "max-w-[21rem] md:max-w-full mx-auto"
          )}
        >
          By clicking "Get Started", you agree with Terms and Conditions,
          Privacy Policy, Subscription Terms
        </p>
        <p className={clsx(nunito.className, footerBase, "block md:hidden text-center")}>
          Fametonic 2025 © All Rights Reserved.
        </p>
        <p className={clsx(urbanist.className, footerBase, "hidden md:block text-start")}>
          Fametonic 2025 © All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
