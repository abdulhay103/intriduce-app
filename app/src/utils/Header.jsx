import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow fixed w-full">
      <nav className=" w-full flex justify-between py-3 container mx-auto">
        <div className=" w-28">
          <Link href="/">Next User</Link>
        </div>
        <ul className="flex gap-5">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
