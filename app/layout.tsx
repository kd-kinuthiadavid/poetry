"use client";

import "./globals.css";
import { Manrope } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// If loading a variable font, you don't need to specify the font weight
const manrope = Manrope({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <html lang="en" className={manrope.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-pr-black text-pr-white h-screen">
        <nav className="sticky top-0 z-50 backdrop-blur-md w-full">
          {showBanner ? (
            <div className="flex justify-between items-center px-6 bg-pr-banner-gradient py-3 w-full">
              <p className="text-lg font-thin">
                Exciting updates are in progress! Thanks for your patience and
                support while I work on making this a better experience.
              </p>
              <i
                className="fa-solid fa-xmark text-pr-white cursor-pointer"
                onClick={() => setShowBanner(false)}
              ></i>
            </div>
          ) : null}

          <div className="flex justify-between items-center pt-3 mx-5 lg:mx-10">
            {/* logo */}
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={50} height={50} />
            </Link>
            {/* nav links */}
            <ul className="flex justify-between gap-x-5 font-thin">
              <Link href="/about">
                <li className="hidden md:block cursor-pointer hover:underline">
                  about
                </li>
              </Link>
              <Link href="/contact">
                <li className="hidden md:block cursor-pointer hover:underline">
                  contact
                </li>
              </Link>
              <Link href="/subscribe">
                <li className="text-pr-orange font-black underline cursor-pointer">
                  subscribe
                </li>
              </Link>
            </ul>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
