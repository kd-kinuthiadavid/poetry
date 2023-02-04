import './globals.css'
import { Manrope } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";

// If loading a variable font, you don't need to specify the font weight
const manrope = Manrope({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-pr-black text-pr-white mx-5 lg:mx-10 h-screen">
        <nav className="flex justify-between items-center pt-3 sticky top-0 z-50 backdrop-blur-md w-full">
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
        </nav>
        {children}
      </body>
    </html>
  );
}
