"use client";
import React from "react";

const Button = ({ handler, children }) => {
  return (
    <button
      onClick={() => handler()}
      className="px-5 py-2 m-3 bg-lime-600 rounded text-white font-bold"
    >
      {children}
    </button>
  );
};

export default Button;
