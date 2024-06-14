"use client";
import React from "react";
import SocialLinks from "@/components/SocialLinks";
import Community from "@/components/Community";
import Dashboard from "@/components/Dashboard";
import Prizes from "@/components/Prizes";
import DashInfo from "@/components/DashInfo";

const DashboardPage: React.FC = async () => {
  return (
    <main className="flex flex-col gap-14 items-center">
      <Dashboard />
      <DashInfo />
      <Prizes />
      <Community />
      <section className="flex items-center gap-9 flex-col ">
      <h3 className="text-2xl leading-[2.4rem] font-medium text-black">
        FOLLOW US FOR MORE UPDATES
      </h3>
      <SocialLinks />
      </section>
    </main>
  );
};

export default DashboardPage;
