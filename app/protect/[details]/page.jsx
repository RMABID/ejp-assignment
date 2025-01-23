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

  return <div>Details{data.body}</div>;
};

export default Details;
