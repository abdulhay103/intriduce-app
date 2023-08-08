import Button from "@/app/src/components/Button";
import React from "react";

const user = ({ user }) => {
  return (
    <li className="bg-white shadow p-5 rounded border-2 border-lime-500">
      <div className="flex gap-4 items-center">
        <p className="px-4 py-2 text-white font-black rounded-full bg-lime-600">
          {user.id}
        </p>
        <h1 className="text-lg font-bold text-lime-700">{user.name}</h1>
      </div>
      <div className="py-2">
        <p>Email: {user.email}</p>
        <p>Company: {user.company["name"]}</p>
        <p>
          Address: {user.address["street"]}, {user.address["city"]}
        </p>
      </div>
      <div className="flex justify-center py-2">
        <Button>Details</Button>
      </div>
    </li>
  );
};

export default user;
