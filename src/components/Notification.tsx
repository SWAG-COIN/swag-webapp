import React from "react";

const Notification = () => {
  return (
    <section className="flex flex-col gap-6 md:gap-12 mt-[3.25rem] mb-6 justify-center items-start">
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
      <div className="self-center max-w-4xl w-[85dvw] md:w-[60dvw] mx-6 border-2 border-black rounded-[2.5rem] px-[1.125rem] py-[2.625rem] ">
        {/* <div className="md:border md:border-black md:p-4"> */}
          <div className=" text-left flex flex-col gap-9 h-[13rem] scrollbar overflow-y-scroll">
            <NotificationText
              title="YOUR NFT TICKET NUMBER: 39040293"
              timestamp="TIMESTAMP"
            />
            <NotificationText
              title="YOUR NFT TICKET NUMBER: 39040293"
              timestamp="TIMESTAMP"
            />
            <NotificationText
              title="YOUR NFT TICKET NUMBER: 39040293"
              timestamp="TIMESTAMP"
            />
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default Notification;

interface INotificationText {
  title: string;
  timestamp: string;
}
const NotificationText: React.FC<INotificationText> = ({
  title,
  timestamp,
}) => {
  return (
    <span className="text-black text-sm md:text-xl font-light leading-[2rem] tracking-[3.6px] md:tracking-[4.8px]">
      {title}
      <p className="text-[#787373] md:text-[0.9375rem] md:tracking-[3.6px]">
        {timestamp}
      </p>
      <hr className="border-1 border-[#CAC7C7] mt-[0.625rem] w-[90%]" />
    </span>
  );
};
