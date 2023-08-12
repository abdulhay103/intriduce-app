import React from "react";

const page = ({ searchParams }) => {
  return (
    <div className="">
      <h1> SearchParams</h1>
      <h2>{searchParams.name}</h2>
      <h2>{searchParams.price}</h2>
    </div>
  );
};

export default page;
