import React from 'react'
import Image from "next/image";

const HeroImage = () => {
  return (
    <div>
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
    </div>
  )
}

export default HeroImage