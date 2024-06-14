import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getSWAGTokenBalance } from "@/lib/anchorClient";
import { useAnchorWallet, useConnection, useWallet } from "@solana/wallet-adapter-react";
import { GoalLottery } from "@/lib/goalLottery";
import { WeeklyLottery } from "@/lib/weeklyLottery";

const DashInfo = async () => {
 const { connected } = useWallet();
 const wallet = useAnchorWallet();
 const { connection } = useConnection();
 const balance = await getSWAGTokenBalance(connection);
 const goalLottery = new GoalLottery(wallet!, connection);
 const weeklyLottery = new WeeklyLottery(wallet!, connection);
 const goalLotteryState = await goalLottery.getLotteryState();
 const goalLotteryTickets = await goalLottery.getLotteryTickets();
 const weeklyLotteryState = await weeklyLottery.getLotteryState();
 const weeklyLotteryTickets = await weeklyLottery.getLotteryTickets();

  return (
    <section className="flex justify-center items-center gap-10 flex-wrap">
      <div className="border-2 border-black rounded-[2.5rem] p-4 w-[22rem] h-[22rem] flex justify-around flex-col items-center">
        <h3 className="text-2xl text-center leading-[2.2rem] tracking-[5.28px] font-semibold text-black">
          YOUR TOKENS
        </h3>
        {connected ? (
          <>
            <p className="text-[2.5rem]  text-[#787373] font-medium leading-none tracking-[5.76px]">
              {(balance || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={60} height={60} />
            </Link>
          </>
        ) : (
          <p className="text-center text-[#787373] font-medium leading-[1.65rem] tracking-[3.84px]">
            Tokens will be displayed here once you connect your wallet (in
            menu).
          </p>
        )}
      </div>
      <div className="border-2 border-black rounded-[2.5rem] p-4 w-[22rem] h-[22rem] flex justify-around flex-col items-center">
        <h3 className="text-2xl text-center leading-[2.2rem] tracking-[5.28px] font-semibold text-black">
          GIVEAWAY ENTRIES
        </h3>
        {connected ? (
          <>
            <div className="flex justify-around text-center w-full text-[#787373] font-medium text-lg leading-none tracking-[5.76px]">
              <span>
                <p className="text-[2.5rem]">{+weeklyLotteryTickets?.ticketId || 'N/A'}</p>
                <br />
                weekly
              </span>
              <span>
                <p className="text-[2.5rem]">{+goalLotteryTickets?.ticketId || 'N/A'}</p>
                <br />
                goal
              </span>
            </div>
            <button disabled={!+goalLotteryTickets?.ticketId && !+weeklyLotteryTickets?.ticketId} className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg border-2 rounded-xl border-black px-4 py-1 tracking-[4.32px]">
              VIEW TICKET NFTS
            </button>
          </>
        ) : (
          <p className="text-center text-[#787373] font-medium leading-[1.65rem] tracking-[3.84px]">
            Giveaway NFTs will be displayed here once you connect your wallet
            (in menu).
          </p>
        )}
      </div>
      <div className="border-2 border-black rounded-[2.5rem] p-4 w-[22rem] h-[22rem] flex justify-around flex-col items-center">
        <h3 className="text-2xl text-center leading-[2.2rem] tracking-[5.28px] font-semibold text-black">
          GIVEAWAY POOL
        </h3>
        {connected ? (
          <>
            <div className="flex justify-around text-center w-full text-[#787373] font-medium text-lg leading-[2.4rem] tracking-[5.76px]">
              <span>
                {(+weeklyLotteryState?.ticketCount || 0)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                <br />
                weekly
              </span>
              <span>
                {(+goalLotteryState?.ticketCount || 0)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                <br />
                goal
              </span>
            </div>
            <p className="font-semibold text-2xl leading-[2.4rem] tracking-[5.76px]">
              TOTAL ENTRIES
            </p>
          </>
        ) : (
          <p className="text-center text-[#787373] font-medium leading-[1.65rem] tracking-[3.84px]">
            Giveaway Pool will be displayed here once you connect your wallet
            (in menu).
          </p>
        )}
      </div>
    </section>
  );
};

export default DashInfo;
