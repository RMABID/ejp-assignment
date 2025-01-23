"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(data);
  return (
    <div className="w-10/12 mx-auto">
      <div className="grid grid-cols-2 my-6 gap-4">
        {data.slice(0, 6).map((item, index) => (
          <Link
            href={`/protect/${item.id}`}
            className="border p-3 rounded-xl duration-500 ease-linear hover:bg-gray-300 hover:translate-y-[-10px] cursor-pointer"
            key={index}
          >
            <p>{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
