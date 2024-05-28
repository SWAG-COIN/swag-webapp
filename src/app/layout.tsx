"use client";
import AppWalletProvider from "@/components/AppWalletProvider";
import "@/app/globals.css";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <body className="min-h-screen flex flex-col justify-between !p-0 !m-0 !overflow-auto" style={{}}>
        <AppWalletProvider>
          <Header />
          {children}
          <Footer />
        </AppWalletProvider>
      </body>
    </html>
  );
}
