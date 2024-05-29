import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
const Question = () => {
  return (
    <section className="pt-[7.375rem] md:pb-[7.375rem]">
      <FAQBanner className="flex md:hidden" />

    <div className=" flex justify-between items-center">
      <img
        src="/inu-swag.png"
        alt="inu-swag"
        loading="lazy"
        className="w-28 md:w-40 lg:w-48 xl:w-52 h-auto"
      />
      <FAQBanner className="hidden md:flex" />
      <img
        src="/crying-zoomer.png"
        alt="crying-zoomer"
        loading="lazy"
        className="w-28 md:w-40 lg:w-48 xl:w-52 h-auto"
      />
    </div>
    </section>
  );
};

export default Question;

const FAQBanner = ({ className = "" }: { className?: string }) => (
  <div
    className={cn(
      "flex-col justify-center items-center gap-[4rem] text-center",
      className
    )}
  >
    <svg className="w-full h-[3.75rem] md:h-[6rem]">
      <text
        className="stroke-text text-[2.5rem] md:text-[4rem] !stroke-2 font-thin leading-9 tracking-[5.28px]"
        x="50%"
        y="50%"
      >
        QUESTIONS ?
      </text>
      <text
        className="stroke-text text-[2.5rem] md:text-[4rem] !stroke-2 font-thin leading-9 tracking-[5.28px]"
        x="50.5%"
        y="49.5%"
      >
        QUESTIONS ?
      </text>
    </svg>
    <p className="text-xl md:text-2xl mx-[2.625rem] leading-8 md:leading-[2.375rem] font-light tracking-[2.4px] md:tracking-[2.88px]">
      Visit our FAQ page for frequently asked questions.
    </p>
    <button className="border-2 px-8 border-black py-2 rounded-xl text-sm leading-[22.4px] tracking-[3.36px] font-semibold">
      FAQ PAGE
    </button>
  </div>
);
