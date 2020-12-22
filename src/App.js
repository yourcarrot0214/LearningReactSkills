import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [ListData, setListData] = useState([]);
  useEffect(() => {
    fetch("list.json")
      .then(function (result) {
        return result.json();
      })
      .then(function (json) {
        setListData(json);
      });
  }, [ListData]);
  const list = ListData.map((list) => <li key={list.id}>{list.text}</li>);
  return <div className="App">{list}</div>;
}
