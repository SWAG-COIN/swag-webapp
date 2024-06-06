import React from "react";
import NotificationBox from "./NotificationBox";

  const Community = () => {
    return (
      <section className="self-center max-w-4xl w-[85dvw] md:w-[60dvw] mx-6 border-2 border-black rounded-[2.5rem] px-[1.125rem] py-[1rem] ">
      <h3 className="text-2xl text-center leading-[2.4rem] font-medium pb-[1rem] text-black">
        COMMUNITY ANNOUNCEMENTS
      </h3>
      <div className="md:border border-black md:p-4">
        <div className=" text-left flex flex-col gap-9 h-[20rem] scrollbar overflow-y-scroll">
          <NotificationBox
            title="Winners of [insert prize] will be announced on [date]. Keep an eye out for notifications in your inbox!"
            timestamp="TIMESTAMP"
          />
          <NotificationBox
            title="Winners of [insert prize] will be announced on [date]. Keep an eye out for notifications in your inbox!"
            timestamp="TIMESTAMP"
          />
          <NotificationBox
            title="Winners of [insert prize] will be announced on [date]. Keep an eye out for notifications in your inbox!"
            timestamp="TIMESTAMP"
          />
        </div>
      </div>
    </section>
    );
  };
  

export default Community;
