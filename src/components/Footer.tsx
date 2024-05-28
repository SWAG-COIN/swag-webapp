import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="m-[1.25rem]">
      <div className="flex justify-around mx-auto lg:gap-52">
        <div className="max-w-[45.25rem]">
          <svg className="w-[304px] h-[100px] hidden md:block">
            <text fontSize={100} fontWeight={500} className="stroke-text" x="50%" y="75%">
              SWAG
            </text>
            <text fontSize={100} fontWeight={500}  className="stroke-text" x="52%" y="73%">SWAG</text>
          </svg>
          <h4 className="text-xs md:text-base leading-[0.75rem] tracking-[1.44px] font-semibold">
            DISCLAIMER
          </h4>
          <p className="mt-1 text-[0.625rem] md:text-base leading-[0.75rem] font-light tracking-[1.2px]">
            Cryptocurrency investments carry a high risk of volatility. Be aware
            of the tax implications, as profits may be subject to capital gains
            or other taxes in your jurisdiction. Cryptocurrency regulations can
            vary, so ensure you understand the rules in your area. Conduct
            thorough research and invest only what you can afford to lose.
          </p>
        </div>
        <Image
          src="/super-swag-inu.png"
          alt="super-swag-inu"
          width={210}
          height={256}
          className="hidden md:block"
        />
      </div>
    </footer>
  );
};

export default Footer;
