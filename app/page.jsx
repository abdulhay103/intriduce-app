import React from "react";
import User from "./src/userCard/User";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

const page = async () => {
  const data = await getData();
  console.log(data);

  return (
    <div className=" w-full h-screen bg-green-100">
      <div className=" container mx-auto">
        <ul className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map((user) => {
            return <User key={user.id} user={user} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default page;
