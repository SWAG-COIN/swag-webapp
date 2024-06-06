import React, { FC, ReactNode } from "react";

interface IGiveawayCard {
  title: string;
  children: ReactNode;
}
const GiveawayCard: FC<IGiveawayCard> = ({ title, children }) => (
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
    {children}
    
  </div>
);

export default GiveawayCard;