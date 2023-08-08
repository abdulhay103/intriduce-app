"use client";
import Link from "next/link";
import React from "react";
import navData from "../utils/navData.js";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="bg-white px-6 md:px-0 lg:px-0 shadow fixed w-full">
      <nav className=" w-full flex justify-between py-3 container mx-auto">
        <div className=" w-28">
          <Link className="font-black text-orange-500" href="/">
            Next User
          </Link>
        </div>
        <div className=" md:hidden lg:hidden">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
            </svg>
          </button>
        </div>
        <div className="hidden md:inline-block lg:inline-block">
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
    </header>
  );
};

export default Header;
