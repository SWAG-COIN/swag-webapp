import React from "react";
import NotificationBox from "./NotificationBox";
import { GoalLottery } from "@/lib/goalLottery";
import { WeeklyLottery } from "@/lib/weeklyLottery";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";

const Community = async () => {
  const wallet = useAnchorWallet();
  const { connection } = useConnection();
  const weeklyLottery = new WeeklyLottery(wallet!, connection);
  const goalLottery = new GoalLottery(wallet!, connection);
  const weeklyLotteryState = await weeklyLottery.getLotteryState();
  const goalLotteryState = await goalLottery.getLotteryState();

  return (
    <section className="self-center max-w-4xl w-[85dvw] md:w-[60dvw] mx-6 border-2 border-black rounded-[2.5rem] px-[1.125rem] py-[1rem] ">
      <h3 className="text-2xl text-center leading-[2.4rem] font-medium pb-[1rem] text-black">
        COMMUNITY ANNOUNCEMENTS
      </h3>
      <div className="md:border border-black md:p-4">
        <div className=" text-left flex flex-col gap-9 h-[20rem] scrollbar overflow-y-scroll">
          {+weeklyLotteryState?.winnersCount === 0 &&
          <NotificationBox
            title={
              <>
                Winners of Lottery#{+weeklyLotteryState?.lotteryIndex} will be
                announced on{" "}
                {new Date(
                  new Date(+weeklyLotteryState?.lastDrawTimestamp).getDay() + 7
                ).toLocaleDateString()}
                . Keep an eye out for notifications in your inbox!
              </>
            }
            timestamp={new Date(
              +weeklyLotteryState?.lastDrawTimestamp
            ).toLocaleDateString()}
          />}
          {goalLotteryState?.winnersCount && (
            <NotificationBox
              title={
                <>
                  THE GOAL LOTTERY WINNING NFT TICKET NUMBERS ARE OUT. <br />{" "}
                  {+goalLotteryState.winnersCount} WINNERS
                </>
              }
              timestamp={new Date(
                +weeklyLotteryState?.lastDrawTimestamp
              ).toLocaleDateString()}
            />
          )}
          {weeklyLotteryState?.winnersCount && (
            <NotificationBox
              title={
                <>
                  THIS WEEK'S WINNING NFT TICKET NUMBERS ARE OUT. <br />{" "}
                  {+weeklyLotteryState.winnersCount} WINNERS
                </>
              }
              timestamp={new Date(
                +weeklyLotteryState?.lastDrawTimestamp
              ).toLocaleDateString()}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Community;
