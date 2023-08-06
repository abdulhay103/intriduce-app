"use client";
import Link from "next/link";
import React from "react";
import navData from "../data/navData.js";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="bg-white shadow fixed w-full">
      <nav className=" w-full flex justify-between py-3 container mx-auto">
        <div className=" w-28">
          <Link className="font-black text-orange-500" href="/">
            Next User
          </Link>
        </div>
        <div className="flex gap-5">
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
