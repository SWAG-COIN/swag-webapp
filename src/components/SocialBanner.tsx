import React from "react";
import Image from "next/image";
import SocialLinks from "./SocialLinks";

const SocialBanner = () => {
  return (
    <section>
      <div className="flex relative h-screen justify-center items-center">
        <Image
          src="/socials.png"
          alt="socials-swag-inu"
          fill={true}
          className="object-cover pointer-events-none h-screen w-screen object-left-top grayscale"
        />
        <div className="py-5 z-10 w-[90dvw] md:w-[65dvw] bg-white/90 flex flex-col gap-14 text-center justify-center items-center border-[3px] border-black">
          <span className="text-center text-2xl md:text-4xl leading-[2.4rem] md:leading-[3.6rem] tracking-[5.76px] md:tracking-[8.64px] font-semibold">
            YK HE LOVES <br />
            THE ATTENTION...
          </span>
          <p className="font-semibold text-base tracking-[3.84px] md:text-2xl md:leading-[2.4rem] md:tracking-[5.76px] ">
            Join the SWAG Squad to <br />
            Follow Him on his
            <br /> <text className="line-through">mischief</text> endeavors
          </p>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default SocialBanner;
