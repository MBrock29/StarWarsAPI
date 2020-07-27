import React, { useState, useEffect } from "react";

export default function Main() {
  const [APIdata, setAPIData] = useState([]);
  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((response) => response.json())
      .then((data) => setAPIData(data));
  }, []);
  
  if(APIdata.length === 0) return <div>Loading...</div>
  return (
    <div>
      {APIdata.results.map((item) => (
        <h1 key={Math.random()}>{item.height}</h1>
      ))}
    </div>
  );
}
