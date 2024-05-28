"use client";
import Hero from "@/components/Hero";
import Question from "@/components/Question";
import SocialBanner from "@/components/SocialBanner";
import Tutorial from "@/components/Tutorial";
import React from "react";


const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <Tutorial />
      <Question />
      <SocialBanner />
    </main>
  );
}
export default HomePage;
