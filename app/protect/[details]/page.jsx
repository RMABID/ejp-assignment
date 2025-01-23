"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const Details = ({ params }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${params?.details}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [params]);

  console.log(data);

  return (
    <div className="w-10/12 mx-auto my-12">
      <div className="border space-y-3 rounded-xl shadow p-5">
        <p className="text-lg">
          Id : <span>{data.id}</span>
        </p>
        <h1 className="text-xl font-medium">
          Title : <span className="text-lg font-light">{data.title}</span>
        </h1>
        <p className="text-xl font-medium">
          Details : <span className="text-[14px] font-light"> {data.body}</span>
        </p>
      </div>
    </div>
  );
};

export default Details;
