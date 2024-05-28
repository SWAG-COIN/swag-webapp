import React from "react";

const Tutorial = () => {
  return (
    <section className="my-9 mx-10 space-y-6">
      <h2 className="text-[#121212] text-center font-semibold text-[1.5rem] leading-[2.375rem] tracking-[2.88px] md:text-[4rem] md:leading-[6.375rem] md:tracking-[7.68px]">
        How to Enter
        <svg className="w-full px-5 h-20 md:h-40">
          <text
            fontSize={48}
            className="stroke-text text-[3rem] md:text-[100px] font-thin leading-[3rem] tracking-[5.76px]"
            x="50%"
            y="50%"
          >
            GIVEAWAY
          </text>
          <text
            //   fontSize={4}
            className="stroke-text text-[3rem] md:text-[100px] font-thin leading-[3rem] tracking-[5.76px]"
            x="50.5%"
            y="49.5%"
          >
            GIVEAWAY
          </text>
        </svg>
      </h2>
      <div className="flex flex-col justify-center gap-6 md:gap-[7.5rem]">
      <div className="flex flex-wrap-reverse justify-around items-center gap-2">
        <span className="text-center lg:text-left text-[#121212] font-semibold text-[1.5rem] leading-[2.375rem] tracking-[2.88px] md:text-[2.5rem] md:leading-[4rem] md:tracking-[4.8px]">
          Purchase SWAG Tokens
          <p className="font-light text-[1rem] max-w-[85dvw] lg:max-w-[40dvw] leading-[1.6rem] tracking-[1.92px] md:text-[1.5rem] md:leading-[2.375rem] md:tracking-[2.88px] ">
            Once you purchase tokens via our DEX, you will automatically be
            entered into the weekly giveaway (our way of giving back to the
            community!). The more tokens you purchase, the more giveaway NFT
            entries you will receive.
          </p>
        </span>
        <img
          src="/inu-wallet.png"
          alt="inu-wallet"
          loading="lazy"
          className="w-28 md:w-[22rem] h-auto"
        />
      </div>
      <div className="flex flex-wrap justify-around items-center gap-2">
        <img
          src="/dashboard.png"
          alt="dashboard"
          loading="lazy"
          className="w-28 md:w-[22rem] h-auto"
        />
        <span className="text-center lg:text-left text-[#121212] font-semibold text-[1.5rem] leading-[2.375rem] tracking-[2.88px] md:text-[2.5rem] md:leading-[4rem] md:tracking-[4.8px]">
          Fund Your Purchase
          <p className="font-light text-[1rem] max-w-[85dvw] lg:max-w-[40dvw] leading-[1.6rem] tracking-[1.92px] md:text-[1.5rem] md:leading-[2.375rem] md:tracking-[2.88px] ">
            Make sure that there is enough tokens (ETH, SOL, USDT, etc.) in your
            wallet to fund your transaction. If you don&apos;t have enough, fund
            your wallet with the desired amount.
          </p>
        </span>
      </div>
      <div className="flex flex-wrap-reverse justify-around items-center gap-2">
        <span className="text-center lg:text-left text-[#121212] font-semibold text-[1.5rem] leading-[2.375rem] tracking-[2.88px] md:text-[2.5rem] md:leading-[4rem] md:tracking-[4.8px]">
          Community Rewards Ecosystem
          <p className="font-light text-[1rem] max-w-[85dvw] lg:max-w-[40dvw] leading-[1.6rem] tracking-[1.92px] md:text-[1.5rem] md:leading-[2.375rem] md:tracking-[2.88px] ">
            Each token transaction takes a small 1% fee that goes into a
            giveaway fund. This fund pays for big prizes. Giveaway tickets are
            drawn once a week using Oracle to ensure fairness. Updates will be
            consistently shared with the community to ensure transparency.
          </p>
        </span>
        <img
          src="/ticket.png"
          alt="ticket"
          loading="lazy"
          className="w-[10.5rem] md:w-[22rem] h-auto"
        />
      </div>
      </div>
    </section>
  );
};

export default Tutorial;
