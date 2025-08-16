import React from "react";
import { descData } from "@/data/heroDescData";

const FeaturesSection = () => {
  return (
    <section className="space-y-3 mt-4">
      {descData?.map((item, i: number) => (
        <p key={i} className="flex justify-start items-center gap-2">
          <span className="text-xl md:text-lg">✨</span>
          <span className="text-base font-medium md:font-semibold">
            {item?.desc}
          </span>
        </p>
      ))}
    </section>
  );
};

export default FeaturesSection;
