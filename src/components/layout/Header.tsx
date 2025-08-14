import React from "react";
import Image from "next/image";
import Link from "next/link";
import { navData } from "@/data/navData";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <header className="container my-4 md:my-8">
      <div className="flex w-full items-center md:items-start justify-center md:justify-between relative">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/images/logo.svg"
            alt="Site logo"
            width={170}
            height={73}
            priority
            className="w-[108px] h-[46px] sm:w-[170px] sm:h-[73px]"
          />
        </Link>

        {/* Mobile Menu Button */}
        <div className="absolute right-[20px] block md:hidden">
          <button>
            <FiMenu size={22} />
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10">
          {navData.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[#A9A9A9] text-lg font-semibold"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
