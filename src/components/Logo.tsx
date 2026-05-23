import React from "react";

type LogoProps = {
  size?: "sm" | "md";
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ size = "sm", className = "" }) => {
  const isMedium = size === "md";

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div
        className={`rounded-xl bg-white shadow-sm ring-1 ring-[#ece6f7] ${
          isMedium ? "h-20 w-20 p-3" : "h-16 w-16 p-2.5"
        }`}>
        <div className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-r from-[#5f21c7] to-[#05aa82] text-white font-black tracking-wide">
          IC
        </div>
      </div>
      <span
        className={`mt-1.5 font-semibold text-[#2a2d55] ${
          isMedium ? "text-xl" : "text-base"
        }`}>
        InstaCard
      </span>
    </div>
  );
};

export default Logo;
