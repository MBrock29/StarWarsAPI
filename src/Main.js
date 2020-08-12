import React, { useState, useEffect } from "react";
import Loading from "./Loading.js"

export default function Main() {
  const [APIdata, setAPIData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])
  useEffect(() => {
  fetch("https://the-one-api.herokuapp.com/v1/book")
    .then((response) => response.json())
    .then((data) => setAPIData(data))
  }, [])


  if(loading === true) return <div><Loading /><h2>Loading...</h2></div>
  return(
    <div className="container">
      {APIdata.docs.map((item) => (
        <div className="zoom"><div className="cards"><h1  key={Math.random()}>{item.name}</h1>
        {/* <h2>Height:&nbsp;{item.height}cm</h2>
        <h2>Weight:&nbsp;{item.mass}kg</h2> */}
        </div></div>
      ))}
    </div>
  )
}

