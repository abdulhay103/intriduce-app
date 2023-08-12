// Parameter Query SSR (searchParams)
// import React from "react";

// const page = ({ searchParams }) => {
//   return (
//     <div className="">
//       <h1> SearchParams</h1>
//       <h2>{searchParams.name}</h2>
//       <h2>{searchParams.price}</h2>
//     </div>
//   );
// };

// export default page;

// Parameter Query CSR (searchParams)

"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  const params = useSearchParams();
  return (
    <div className="">
      <h1> SearchParams</h1>
      <h2>{params.get("name")}</h2>
      <h2>{params.get("price")}</h2>
    </div>
  );
};

export default page;
