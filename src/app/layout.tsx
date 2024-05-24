"use client";
import AppWalletProvider from "@/components/AppWalletProvider";
import "@/app/globals.css";
import Link from "next/link";
import Image from "next/image";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { useState, useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <html lang="en">
      <body>
        <AppWalletProvider>
          <header className="flex justify-between items-center py-4 px-11 bg-[#121212] ">
            <Image src="/logo.png" alt="logo" width={48} height={48} />
            <nav className="space-x-16 text-white font-semibold text-lg tracking-[.25rem]">
              <Link href="/">HOME</Link>
              <Link href="/address">DASHBOARD</Link>
              <Link href="/transfer">FAQ</Link>
              <Link href="/anchor">DM</Link>
            </nav>
            <WalletMultiButton
              style={{
                background: "#fff",
                color: "#000",
                letterSpacing: "4.32px",
                fontSize: "18px",
                lineHeight: "28.8px",
                borderRadius: '12px',
              }}
            >
            </WalletMultiButton>
          </header>
          {children}
        </AppWalletProvider>
      </body>
    </html>
  );
}
