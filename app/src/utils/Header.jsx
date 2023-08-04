import React from "react";

const Header = () => {
  return (
    <div>
      <ul className=" flex gap-5">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
