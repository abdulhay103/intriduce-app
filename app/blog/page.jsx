"use client";
import React, { useEffect } from "react";

const page = () => {
  useEffect(() => {
    function setCookie(cookieName, cookieValue, expirationDays) {
      const expirationDate = new Date();
      expirationDate.setTime(
        expirationDate.getTime() + expirationDays * 24 * 60 * 60 * 1000
      );

      const expires = "expires=" + expirationDate.toUTCString();
      document.cookie =
        cookieName + "=" + cookieValue + "; " + expires + "; path=/";
    }
    setCookie("myCookie", "Hello, Cookie!", 3);
  }, []);

  return (
    <div className="">
      <h1>from Blog page</h1>
    </div>
  );
};

export default page;
