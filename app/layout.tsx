import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Interview Assistant",
  description: "An AI application to help prepare for your interviews",
};

const RootLayout = ({ children } : { children : ReactNode }) =>  {
  return (
    <html lang="en" className="dark"> 
      <body
        className={`${monaSans.className} antialiased pattern`} 
      >
        {children}
        <Toaster/>
      </body>
    </html>
  )
}

export default RootLayout;