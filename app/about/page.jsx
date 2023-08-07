"use client";
import { useEffect, useState } from "react";
import User from "./userCard/user";

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
      <ul>
        {users
          ? users.map((user) => {
              return <User key={user.id} user={user} />;
            })
          : ""}
      </ul>
    </div>
  );
};

export default page;
