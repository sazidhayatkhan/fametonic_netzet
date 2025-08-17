import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  children: ReactNode;
  iconSrc?: string;
  iconAlt?: string;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  iconSrc,
  iconAlt = "icon",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "bg-neon-pink text-white text-xl font-bold h-[40px] w-full",
        "flex justify-center items-center gap-2 rounded-[10px] cursor-pointer",
        "shadow-[2px_2px_10px_0px_#00E7F9]",
        className
      )}
      {...props}
    >
      {children}
      {iconSrc && (
        <span>
          <img src={iconSrc} alt={iconAlt} className="w-[13px] h-[14px]" />
        </span>
      )}
    </button>
  );
}
