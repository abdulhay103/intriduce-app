"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import Button from "../components/Button";

const page = () => {
  const params = useSearchParams();
  const routes = useRouter();

  const routing = () => {
    routes.push("/portfolio?name=Samsung&price=600");
  };
  const pageRefresh = () => {
    routes.refresh();
    alert("page reloaded");
  };
  return (
    <div className="">
      <h1> SearchParams</h1>
      <Button handler={routing}>Click Me!</Button>
      <Button handler={pageRefresh}>Page Refresh</Button>
    </div>
  );
};

export default page;
