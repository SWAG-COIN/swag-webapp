import React from "react";


interface INotificationBox {
    title: string;
    timestamp: string;
  }
  const NotificationBox: React.FC<INotificationBox> = ({
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
  

export default NotificationBox;
