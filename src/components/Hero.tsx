import React from "react";
import GiveawayCard from "./Giveaway";
import { GoalLottery } from "@/lib/goalLottery";
import { WeeklyLottery } from "@/lib/weeklyLottery";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import Countdown from "react-countdown";
import Link from "next/link";

const Hero = async () => {
 const wallet = useAnchorWallet();
 const { connection } = useConnection();
 const weeklyLottery = new WeeklyLottery(wallet!, connection);
 const goalLottery = new GoalLottery(wallet!, connection);
 const weeklyLotteryState = await weeklyLottery.getLotteryState();
 const goalLotteryState = await goalLottery.getLotteryState();
 
  return (
    <section className="relative flex flex-col justify-center items-center my-[3.0625rem] gap-[2.625rem] overflow-hidden">
      <div className="w-full z-10">
        <svg className="w-full h-[125px] hidden md:block">
          <text
            fontSize={124}
            fontWeight={500}
            className="stroke-text"
            x="50%"
            y="75%"
          >
            SWAG GIVEAWAY
          </text>
          <text
            fontSize={124}
            fontWeight={500}
            className="stroke-text"
            x="50.25%"
            y="74.75%"
          >
            SWAG GIVEAWAY
          </text>
        </svg>
        <svg className="w-full h-[50px]  md:hidden block">
          <text
            fontSize={48}
            fontWeight={500}
            className="stroke-text !stroke-2"
            x="50%"
            y="75%"
          >
            SWAG
          </text>
          <text
            fontSize={48}
            fontWeight={500}
            className="stroke-text !stroke-2"
            x="51%"
            y="74%"
          >
            SWAG
          </text>
        </svg>
        <svg className="w-full h-[50px]  md:hidden block">
          <text
            fontSize={48}
            fontWeight={500}
            className="stroke-text !stroke-2"
            x="50%"
            y="75%"
          >
            GIVEAWAY
          </text>
          <text
            fontSize={48}
            fontWeight={500}
            className="stroke-text !stroke-2"
            x="51%"
            y="74%"
          >
            GIVEAWAY
          </text>
        </svg>
      </div>
      <div className="flex z-10 flex-col flex-wrap md:flex-row justify-center items-center gap-10 w-full">
        <img
          src="/swag-lambo-tesla.png"
          alt="swag-lambo-tesla"
          loading="lazy"
          className="hidden md:block"
        />
        <div className="md:hidden grid grid-cols-1 grid-rows-3 justify-center place-items-center w-full">
          <img src="/jeet.png" alt="jeet" loading="lazy" />
          <img
            src="/tesla.png"
            alt="tesla"
            loading="lazy"
            className="place-self-end -mr-24 -my-5"
          />
          <img
            src="/lambo.png"
            alt="lambo"
            loading="lazy"
            className="place-self-start ml-6 -my-5"
          />
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-6">
          <GiveawayCard title="WEEKLY GIVEAWAY">
            <p className="text-base font-light tracking-[3.84px]">
              Enter for a chance to win:
            </p>
            <b className="text-xl leading-[2rem] font-semibold tracking-[4.8px]">
              TESLA CYBERTRUCK
            </b>
            <div className="bg-black h-[8.5rem] flex flex-col justify-around w-full text-white text-center font-bold py-4">
              <span className="text-sm leading-[1.375rem] tracking-[3.36px] ">
                Current round ends in
              </span>
              <p className="text-[1.75rem] leading-[2.75rem] tracking-[6.72px]">
                <Countdown date={new Date(new Date(+weeklyLotteryState?.lastDrawTimestamp).getDay() + 7)} />
              </p>
              <span className="flex justify-center gap-10">
                <p className="text-sm leading-[1.375rem] tracking-[3.36px]">
                  Days
                </p>
                <p className="text-sm leading-[1.375rem] tracking-[3.36px]">
                  Hours
                </p>
                <p className="text-sm leading-[1.375rem] tracking-[3.36px]">
                  Mins
                </p>
                <p className="text-sm leading-[1.375rem] tracking-[3.36px]">
                  Secs
                </p>
              </span>
            </div>
            <Link href="https://www.orca.so/?tokenIn=So11111111111111111111111111111111111111112&tokenOut=orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE" target="_blank" className="border-2 px-8 border-black py-2 rounded-xl text-sm leading-[22.4px] tracking-[3.36px] font-semibold">
              BUY WITH DEX
            </Link>
          </GiveawayCard>
          <GiveawayCard title="SWAG GIVEAWAY">
            <p className="text-base font-light tracking-[3.84px]">
              Enter for a chance to win:
            </p>
            <b className="text-xl leading-[2rem] font-semibold tracking-[4.8px]">
              TESLA CYBERTRUCK
            </b>
            <div className="bg-black h-[8.5rem] flex flex-col justify-around w-full text-white text-center font-bold py-4">
              <span className="text-sm leading-[1.375rem] tracking-[3.36px] ">
                Entries remaining until draw:
              </span>
              <p className="text-[1.75rem] leading-[2.75rem] tracking-[6.72px]">
                {+goalLotteryState?.ticketCount}
              </p>
            </div>
            <Link href="https://www.orca.so/?tokenIn=So11111111111111111111111111111111111111112&tokenOut=orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE" target="_blank" className="border-2 px-8 border-black py-2 rounded-xl text-sm leading-[22.4px] tracking-[3.36px] font-semibold">
              BUY WITH DEX
            </Link>
          </GiveawayCard>
        </div>
      </div>
      <img
        src="/moving-clouds-in-sky.png"
        alt="moving-clouds-in-sky"
        className="absolute top-5 md:h-full w-auto scale-125 object-fill object-left-top z-0"
      />
    </section>
  );
};

export default Hero;
