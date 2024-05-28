import React, { FC, ReactNode } from "react";

interface IGiveawayCard {
  title: string;
  prize: string;
  content: ReactNode;
}
const GiveawayCard: FC<IGiveawayCard> = ({ title, prize, content }) => (
  <div className="w-fit bg-white min-h-[30rem] space-y-6 border-2 rounded-[2.5rem] py-5 flex flex-col items-center justify-center border-black">
    <svg className="w-fit px-5 h-8">
      <text
      fontSize={22}
        className="stroke-text !stroke-2 font-thin leading-9 tracking-[5.28px]"
        x="50%"
        y="50%"
      >
        {title}
      </text>
    </svg>
    <p className="text-base font-light tracking-[3.84px]">
      Enter for a chance to win:
    </p>
    <b className="text-xl leading-[2rem] font-semibold tracking-[4.8px]">
      {prize}
    </b>
    <div className="bg-black w-full text-white text-center font-bold py-4">
      {content}
    </div>
    <button className="border-2 px-8 border-black py-2 rounded-xl text-sm leading-[22.4px] tracking-[3.36px] font-semibold">
      BUY WITH DEX
    </button>
  </div>
);

export default GiveawayCard;