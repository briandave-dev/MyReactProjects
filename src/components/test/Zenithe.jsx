import React, { useEffect, useState } from "react";
import axios from "axios";

const DisplayData = () => {
  const [data, setData] = useState(null);
  const endpoint =
    "https://zenbio.zenitheinsurance.com:9002/orass/Zen-renouvellement/1001-1010002998";

  useEffect(() => {
    fetch(endpoint)
      .then((response) => {
        console.log(response.data); // Log data to console
        setData(response.data); // Set data to state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="p-4 bg-gray-100 text-gray-900 rounded shadow-lg">
      <h1 className="text-xl font-bold mb-4">API Response</h1>
      <pre className="bg-white p-4 rounded overflow-auto text-xs">
        {data ? JSON.stringify(data, null, 2) : "Loading..."}
      </pre>
    </div>
  );
};

export default DisplayData;
