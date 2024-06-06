import React from "react";
import GiveawayCard from "@/components/Giveaway";
import Image from "next/image";

  const Prizes = () => {
    return (
      <section className="flex justify-center items-center gap-10 flex-wrap">

      <GiveawayCard title="WEEKLY PRIZE">
        <div className="bg-black w-full text-white text-center font-bold py-4">
          <span className="text-sm leading-[1.375rem] tracking-[3.36px] ">
            Current round ends in
          </span>
          <p className="text-[1.75rem] leading-[2.75rem] tracking-[6.72px]">
            06 : 23 : 56 : 12
          </p>
          <span className="flex justify-center gap-10">
            <p className="text-sm leading-[1.375rem] tracking-[3.36px]">Days</p>
            <p className="text-sm leading-[1.375rem] tracking-[3.36px]">
              Hours
            </p>
            <p className="text-sm leading-[1.375rem] tracking-[3.36px]">Mins</p>
            <p className="text-sm leading-[1.375rem] tracking-[3.36px]">Secs</p>
          </span>
        </div>
        <Image
          src="/lambo-no-bg.png"
          alt="lambo-no-bg"
          width={283}
          height={90}
        />
        <span className="font-semibold tracking-[3.84px]">
          Lambourghini [model name]
          <p className="text-center font-light">
            Description
            <br />
            Prize Pool Worth: $$$
          </p>
        </span>
      </GiveawayCard>
      <GiveawayCard title="SWAG PRIZE">
        <div className="bg-black w-full text-white text-center font-bold py-4">
          <span className="text-sm leading-[1.375rem] tracking-[3.36px] ">
            Current round ends in
          </span>
          <p className="text-[1.75rem] leading-[2.75rem] tracking-[6.72px]">
            06 : 23 : 56 : 12
          </p>
          <span className="flex justify-center gap-10">
            <p className="text-sm leading-[1.375rem] tracking-[3.36px]">Days</p>
            <p className="text-sm leading-[1.375rem] tracking-[3.36px]">
              Hours
            </p>
            <p className="text-sm leading-[1.375rem] tracking-[3.36px]">Mins</p>
            <p className="text-sm leading-[1.375rem] tracking-[3.36px]">Secs</p>
          </span>
        </div>
        <Image
          src="/tesla-no-bg.png"
          alt="tesla-no-bg"
          width={283}
          height={90}
        />
        <span className="font-semibold tracking-[3.84px]">
          Lambourghini [model name]
          <p className="text-center font-light">
            Description
            <br />
            Prize Pool Worth: $$$
          </p>
        </span>
      </GiveawayCard>
      </section>
    );
  };
  

export default Prizes;
