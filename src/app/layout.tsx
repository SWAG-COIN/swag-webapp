"use client";
import "@/app/globals.css";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import AppWalletProvider from "@/components/AppWalletProvider";
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
      {/* make sure to keep toaster above children */}
        <Toaster position="bottom-right" />
        <AppWalletProvider>
          <Header />
          {children}
          <Footer />
        </AppWalletProvider>
      </body>
    </html>
  );
}
