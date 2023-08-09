"use client";
import { useEffect, useState } from "react";
import User from "./userCard/user";
import Loader from "../src/components/Loader";

const page = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      console.log(res);
      if (res.status == 200) {
        const data = await res.json();
        console.log(data);
        setUsers(data);
      }
    })();
  }, []);
  console.log(users);
  return (
    <div className="">
      <h1 className="py-3 text-lg font-bold text-orange-500">
        Client side API Rendaring
      </h1>
      <ul className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 md:p-0 lg:p-0">
        {users ? (
          users.map((user) => {
            return <User key={user.id} user={user} />;
          })
        ) : (
          <Loader />
        )}
      </ul>
    </div>
  );
};

export default page;
