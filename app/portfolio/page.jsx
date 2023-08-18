"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  const params = useSearchParams();
  return (
    <div className="">
      <h1>from Portfolio Page</h1>
      <h2>{params.get("name")}</h2>
      <h2>{params.get("price")}</h2>
    </div>
  );
};

export default page;
