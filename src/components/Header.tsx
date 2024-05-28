import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Header = () => {
  return (
    <header className="py-4 px-11 bg-[#121212] sticky top-0 z-20">
      <WebMenu />
      <MobileMenu />
    </header>
  );
};

export default Header;

const WebMenu = () => (
  <div className="justify-between items-center hidden md:flex">
    <Link href="/">
      <Image src="/logo.png" alt="logo" width={48} height={48} />
    </Link>
    <nav className="space-x-8 lg:space-x-16 text-white font-semibold text-lg tracking-[.25rem]">
      <Link href="/">HOME</Link>
      <Link href="/dashboard">DASHBOARD</Link>
      <Link href="/faq">FAQ</Link>
      <Link href="/dm">DM</Link>
    </nav>
    <WalletMultiButton
      style={{
        background: "#fff",
        color: "#000",
        letterSpacing: "4.32px",
        fontSize: "18px",
        lineHeight: "28.8px",
        borderRadius: "12px",
      }}
    ></WalletMultiButton>
  </div>
);

const MobileMenu = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex justify-between items-center md:hidden">
      <Link href="/" className="flex justify-center items-center gap-5">
        <Image src="/logo.png" alt="logo" width={48} height={48} />
        <span className="text-white font-semibold text-lg tracking-[.25rem]">
          SWAG
        </span>
      </Link>
      {sidebarOpen ? (
        <button
          onClick={() => setSidebarOpen(false)}
          className="text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      ) : (
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      )}

      <div
        id="sidebar"
        className={`fixed z-20 inset-y-0 left-0 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out bg-[#121212] text-white font-semibold text-lg w-3/4 p-5 space-y-16`}
      >
        <Link href="/" className="flex items-center gap-5">
          <Image src="/logo.png" alt="logo" width={48} height={48} />
          <span className="text-white font-semibold text-lg tracking-[.25rem]">
            SWAG
          </span>
        </Link>
        <nav className="space-y-8 flex flex-col justify-center items-center text-white font-semibold text-lg tracking-[.25rem]">
          <Link href="/">HOME</Link>
          <Link href="/dashboard">DASHBOARD</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/dm">DM</Link>
          <WalletMultiButton
            style={{
              background: "#fff",
              color: "#000",
              letterSpacing: "4.32px",
              fontSize: "18px",
              lineHeight: "28.8px",
              borderRadius: "12px",
            }}
          ></WalletMultiButton>
        </nav>
      </div>
    </div>
  );
};
