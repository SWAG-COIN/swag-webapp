import React from "react";

const DashInfo = () => {
  return (
    <section className="flex justify-center items-center gap-10 flex-wrap">
      <div className="border-2 border-black rounded-[2.5rem] p-4 w-[20rem] h-[20rem] flex justify-around flex-col items-center">
        <h3 className="text-2xl text-center leading-[2.2rem] tracking-[5.28px] font-semibold text-black">
          YOUR TOKENS
        </h3>
        <p className="text-center text-[#787373] font-medium leading-[1.65rem] tracking-[3.84px]">
          Tokens will be displayed here once you connect your wallet (in menu).
        </p>
      </div>
      <div className="border-2 border-black rounded-[2.5rem] p-4 w-[20rem] h-[20rem] flex justify-around flex-col items-center">
        <h3 className="text-2xl text-center leading-[2.2rem] tracking-[5.28px] font-semibold text-black">
        GIVEAWAY ENTRIES
        </h3>
        <p className="text-center text-[#787373] font-medium leading-[1.65rem] tracking-[3.84px]">
        Giveaway NFTs will be displayed here once you connect your wallet (in menu).
        </p>
      </div>
      <div className="border-2 border-black rounded-[2.5rem] p-4 w-[20rem] h-[20rem] flex justify-around flex-col items-center">
        <h3 className="text-2xl text-center leading-[2.2rem] tracking-[5.28px] font-semibold text-black">
        GIVEAWAY POOL
        </h3>
        <p className="text-center text-[#787373] font-medium leading-[1.65rem] tracking-[3.84px]">
        Giveaway Pool will be displayed here once you connect your wallet (in menu).
        </p>
      </div>
      
    </section>
  );
};

export default DashInfo;
