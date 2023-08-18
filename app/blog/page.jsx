"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import Button from "../components/Button";
import Link from "next/link";

const page = () => {
  return (
    <div className="">
      <h1> SearchParams</h1>
      <Link href="/portfolio?name=Samsung&price=600">Click Me!</Link>
    </div>
  );
};

export default page;
