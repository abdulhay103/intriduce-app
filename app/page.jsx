import React from "react";
import User from "./src/userCard/User";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

const page = async () => {
  const data = await getData();

  return (
    <div className="">
      <h1 className="py-3 text-lg font-bold">Server side API Rendaring</h1>
      <ul className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 md:p-0 lg:p-0">
        {data.map((user) => {
          return <User key={user.id} user={user} />;
        })}
      </ul>
    </div>
  );
};

export default page;
