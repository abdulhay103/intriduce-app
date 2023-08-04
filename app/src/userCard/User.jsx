import React from "react";

const user = ({ user }) => {
  return (
    <li className="bg-white shadow p-5 rounded">
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </li>
  );
};

export default user;
