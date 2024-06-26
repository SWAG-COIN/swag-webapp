import React from "react";
import NotificationBox from "./NotificationBox";
import { useAnchorWallet, useConnection, useWallet } from "@solana/wallet-adapter-react";
import { getTicketHistory, getWinStatus } from "@/lib/api";
import { WeeklyLottery } from "@/lib/weeklyLottery";
import { GoalLottery } from "@/lib/goalLottery";

const Notification = async () => {
  const { connected } = useWallet();
  const wallet = useAnchorWallet();
 const { connection } = useConnection();
 const weeklyLottery = new WeeklyLottery(wallet!, connection);
 const goalLottery = new GoalLottery(wallet!, connection);
 const weeklyLotteryState = await weeklyLottery.getLotteryState();
 const goalLotteryState = await goalLottery.getLotteryState();
 

  const tickets = ((await getTicketHistory(
    wallet ? wallet.publicKey.toString() : ""
  )) || []) as { date: string; n: number }[];

  const hasWonWeekly = await getWinStatus(
    wallet ? wallet.publicKey.toString() : "", 'week')

  const hasWonGoal = await getWinStatus(
    wallet ? wallet.publicKey.toString() : "", 'goal')

  return (
    <section className="md:mx-[5rem] flex flex-col gap-6 md:gap-12 mt-[3.25rem] mb-6 justify-center items-start">
      <svg className="w-full md:w-fit h-[4.25rem] md:h-[10rem]">
        <text
          className="stroke-text text-[3rem] md:text-[6.25rem] !stroke-2 font-medium leading-[4.75rem] tracking-[0.75rem] md:leading-[6.25rem] md:tracking-[1.5rem]"
          x="50%"
          y="50%"
        >
          DM
        </text>
        <text
          className="stroke-text text-[3rem] md:text-[6.25rem] !stroke-2 font-medium leading-[4.75rem] tracking-[0.75rem] md:leading-[6.25rem] md:tracking-[1.5rem]"
          x="50.5%"
          y="49.5%"
        >
          DM
        </text>
      </svg>
      <span className="-mt-4 md:-mt-16 text-sm md:text-2xl text-center md:text-left mx-6 md:mx-12 leading-[1.4rem] md:leading-[2.4rem] font-light tracking-[1.68px] md:tracking-[2.88px]">
        Here&apos;s where you will receive personalized notifications,
        transaction and NFT timestamps, and other important updates.
      </span>
      <div className="self-center max-w-5xl w-[85dvw] md:w-[60dvw] mx-6 border-2 border-black rounded-[2.5rem] px-[1.125rem] py-[2.625rem] ">
        <div className="md:border border-black md:p-4">
          <div className=" text-left flex flex-col gap-9 h-[20rem] scrollbar overflow-y-scroll">
            {connected ? (
              <>
              {hasWonGoal && 
              <NotificationBox
              title='CONGRATULATIONS! YOU HAVE WON GOAL LOTTERY PRIZE!'
              timestamp={new Date().toLocaleDateString()}
            />}
            {hasWonWeekly && 
              <NotificationBox
              title='CONGRATULATIONS! YOU HAVE WON WEEKLY LOTTERY PRIZE!'
              timestamp={new Date(+weeklyLotteryState?.lastDrawTimestamp).toLocaleDateString()}
            />}
            {goalLotteryState?.winnersCount && 
              <NotificationBox
              title={<>THE GOAL LOTTERY WINNING NFT TICKET NUMBERS ARE OUT. <br/> {+goalLotteryState.winnersCount} WINNERS</>}
              timestamp={new Date(+weeklyLotteryState?.lastDrawTimestamp).toLocaleDateString()}
            />}
            {weeklyLotteryState?.winnersCount && 
              <NotificationBox
              title={<>THIS WEEK'S WINNING NFT TICKET NUMBERS ARE OUT. <br/> {+weeklyLotteryState.winnersCount} WINNERS</>}
              timestamp={new Date(+weeklyLotteryState?.lastDrawTimestamp).toLocaleDateString()}
            />}
                {tickets.map(({ date, n }) => {
                  return (
                    <NotificationBox
                      title={`YOUR NFT TICKET NUMBER: ${n}`}
                      timestamp={date}
                    />
                  );
                })}
              </>
            ) : (
              <p className="flex justify-center items-center w-full h-full text-black text-sm md:text-xl font-light leading-[2rem] tracking-[3.6px] md:tracking-[4.8px]">
                Please connect your wallet.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notification;
