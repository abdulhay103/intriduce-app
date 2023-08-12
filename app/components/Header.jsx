"use client";
import Link from "next/link";
import React, { useState } from "react";
import navData from "../utils/navData.js";
import { usePathname } from "next/navigation";
import Menbar from "../../public/bar.svg";
import UpDown from "../../public/up-down.svg";
import Image from "next/image.js";

const Header = () => {
  const pathname = usePathname();
  const [isToggle, setIsToggle] = useState(false);

  const toggleBtn = () => {
    setIsToggle(!isToggle);
  };
  return (
    <header className="bg-white px-6 md:px-0 lg:px-0 shadow fixed w-full">
      <nav className=" w-full flex justify-between py-3 container mx-auto">
        <div className=" w-28">
          <Link className="font-black text-orange-500" href="/">
            Next User
          </Link>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleBtn}>
            {isToggle ? (
              <Image src={UpDown} alt="menu Icon" width={24} height={24} />
            ) : (
              <Image src={Menbar} alt="Menu Icon" width={24} height={24} />
            )}
          </button>
        </div>
        <div className="hidden lg:inline-block ">
          <ul className="flex gap-5">
            {navData.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.id}>
                  <Link
                    className={
                      isActive
                        ? "text-orange-600 font-bold"
                        : "text-lime-600 font-bold hover:text-orange-500 hover:underline hover:underline-offset-2"
                    }
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      <div className={isToggle ? "block lg:hidden" : "hidden"}>
        <ul className="flex flex-col gap-3 items-center pb-3">
          {navData.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li
                className=" w-full px-5 py-2 hover:bg-slate-100 rounded"
                key={link.id}
              >
                <Link
                  className={
                    isActive
                      ? "text-orange-600 font-bold"
                      : "text-lime-600 font-bold hover:text-orange-500 hover:underline hover:underline-offset-2"
                  }
                  href={link.href}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
