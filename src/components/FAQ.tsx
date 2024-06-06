import React, { ReactNode, useState } from "react";


const FAQList = [
  {
    //@TODO
      question: "How is the giveaway funded?",
      answer: "A giveaway NFT is a string of unique numbers that are tied to every giveaway token transaction. Every trade conducted on the DEX automatically grants the trader a giveaway NFT, ensuring their participation in the ongoing giveaway(s). Users receive an NFT as a giveaway ticket for each trade they make in the designated pool. These NFTs are linked to their wallets and are automatically eligible for the lottery. You can find the giveaway NFTs that you own on the website dashboard.",
  },
  {
    //@TODO
      question: "How are giveaway tickets minted and distributed?",
      answer: "A giveaway NFT is a string of unique numbers that are tied to every giveaway token transaction. Every trade conducted on the DEX automatically grants the trader a giveaway NFT, ensuring their participation in the ongoing giveaway(s). Users receive an NFT as a giveaway ticket for each trade they make in the designated pool. These NFTs are linked to their wallets and are automatically eligible for the lottery. You can find the giveaway NFTs that you own on the website dashboard.",
  },
  {
    //@TODO
      question: "How are winners selected?",
      answer: "A giveaway NFT is a string of unique numbers that are tied to every giveaway token transaction. Every trade conducted on the DEX automatically grants the trader a giveaway NFT, ensuring their participation in the ongoing giveaway(s). Users receive an NFT as a giveaway ticket for each trade they make in the designated pool. These NFTs are linked to their wallets and are automatically eligible for the lottery. You can find the giveaway NFTs that you own on the website dashboard.",
  },
  {
    //@TODO
      question: "I just won the giveaway draw. How do I claim my prize?",
      answer: "A giveaway NFT is a string of unique numbers that are tied to every giveaway token transaction. Every trade conducted on the DEX automatically grants the trader a giveaway NFT, ensuring their participation in the ongoing giveaway(s). Users receive an NFT as a giveaway ticket for each trade they make in the designated pool. These NFTs are linked to their wallets and are automatically eligible for the lottery. You can find the giveaway NFTs that you own on the website dashboard.",
  },
  {
    //@TODO
      question: "How many SWAG tokens do I need to buy to receive a ticket?",
      answer: "A giveaway NFT is a string of unique numbers that are tied to every giveaway token transaction. Every trade conducted on the DEX automatically grants the trader a giveaway NFT, ensuring their participation in the ongoing giveaway(s). Users receive an NFT as a giveaway ticket for each trade they make in the designated pool. These NFTs are linked to their wallets and are automatically eligible for the lottery. You can find the giveaway NFTs that you own on the website dashboard.",
  },
]


const FAQ = () => {
  const [faqId, setFaqId] = useState<number>(0)
  return (
    <section className="md:mx-[5rem] flex flex-col gap-6 md:gap-12 mt-[3.25rem] mb-6 justify-center items-start">
      <svg className="w-full md:w-fit h-[4.25rem] md:h-[10rem]">
        <text
          className="stroke-text text-[3rem] md:text-[6.25rem] !stroke-2 font-medium leading-[4.75rem] tracking-[0.75rem] md:leading-[6.25rem] md:tracking-[1.5rem]"
          x="50%"
          y="50%"
        >
          FAQ
        </text>
        <text
          className="stroke-text text-[3rem] md:text-[6.25rem] !stroke-2 font-medium leading-[4.75rem] tracking-[0.75rem] md:leading-[6.25rem] md:tracking-[1.5rem]"
          x="50.5%"
          y="49.5%"
        >
          FAQ
        </text>
      </svg>
      <span className="-mt-4 md:-mt-16 text-sm md:text-2xl text-center md:text-left leading-[1.4rem] md:leading-[2.4rem] font-light tracking-[1.68px] md:tracking-[2.88px]">
        The following are some frequently asked questions about SWAG and the
        giveaway ecosystem. We encourage you to follow our socials to stay
        updated with any new changes.
      </span>
      <div className="self-center w-[95dvw] md:w-[80dvw] px-[1.125rem] py-[2.625rem]">
    <div className="flex justify-around w-full">
      <div>
      {FAQList.map((item, index) => (
        <FaqItems 
        key={index}
        id={index}
        question={item.question}
        answer={item.answer}
        faqId={faqId}
        setFaqId={setFaqId}
/>
      ))}
      </div>
      <span className="text-[#18191F] font-inter text-lg my-4 w-1/3 hidden md:block font-bold">
      {FAQList.at(faqId)?.question}
       <p className="mt-[2.5rem] text-base font-normal text-black">
        {FAQList.at(faqId)?.answer}
      </p>
      </span>
      </div>
      </div>
    </section>
  );
};

export default FAQ;

interface IFaqItems {
  id: number;
    answer: string | ReactNode;
    faqId: number;
    setFaqId: React.Dispatch<React.SetStateAction<number>>;

  question: string;
}
const FaqItems: React.FC<IFaqItems> = ({ question, answer, id, faqId, setFaqId  }) => {
 
  return (
    <div className="flex flex-col text-black ">
      <div onClick={() => setFaqId(id === faqId ? -1 : id)} className=" cursor-pointer flex w-full justify-between items-start gap-5 px-4 py-6 shadow-[0_0_1px_1px_rgba(0,0,0,0.05)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle cx="12" cy="12" r="12" className={`${id === faqId ? 'fill-[#5D5FEF]' : 'fill-[#A5A6F6]'} `} />
        </svg>
        <span className="w-[99%] md:text-xl font-inter font-normal leading-[1.5rem]">{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className={`${id === faqId && 'rotate-90 md:rotate-0'} transition-all duration-200`}
        >
          <path
            d="M8 4L16 12L8 20"
            className={`${id === faqId ? 'stroke-[#5D5FEF]' : 'stroke-[#A5A6F6]'} `}
            stroke="#5D5FEF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {faqId === id && (
      <p className="text-black mx-2 my-4 md:hidden">
        {answer}
      </p>)}
    </div>
  );
};
