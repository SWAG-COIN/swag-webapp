import React from "react";

  const Dashboard = () => {
    return (
      <section className="mt-12 flex flex-col items-center">
      <div className="flex items-center justify-center w-full">
        <svg className="w-[100%] h-[4.25rem] md:h-[10rem]">
          <text
            className="stroke-text text-[3rem] md:text-[6.25rem] !stroke-2 font-medium leading-[4.75rem] tracking-[0.75rem] md:leading-[6.25rem] md:tracking-[1.5rem]"
            x="50%"
            y="50%"
          >
            WELCOME
          </text>
          <text
            className="stroke-text text-[3rem] md:text-[6.25rem] !stroke-2 font-medium leading-[4.75rem] tracking-[0.75rem] md:leading-[6.25rem] md:tracking-[1.5rem]"
            x="50.5%"
            y="49.5%"
          >
            WELCOME
          </text>
        </svg>
        <button className="hidden lg:block h-[4rem] xl:-ml-16 xl:mr-32 -mt-12 w-1/2 px-8 bg-black text-white py-2 rounded-xl text-sm leading-[22.4px] tracking-[3.36px] font-semibold">
          GET MORE GIVEAWAY ENTRIES
        </button>
      </div>
      <span className="-mt-4 md:-mt-10 mb-4 text-sm md:text-2xl text-center md:text-left mx-6 md:mx-12 leading-[1.4rem] md:leading-[2.4rem] font-light tracking-[1.68px] md:tracking-[2.88px]">
      This dashboard keeps track of your giveaway entries and provides live updates about the giveaway ecosystem. Each token transaction takes a small 1% fee that goes into a giveaway pool to fund the prizes of each cycle.
      </span>
      <button className="lg:hidden h-[3rem] px-8 bg-black text-white py-2 rounded-xl text-sm leading-[22.4px] tracking-[3.36px] font-semibold">
          GET MORE GIVEAWAY ENTRIES
        </button>
        </section>
    );
  };
  

export default Dashboard;
