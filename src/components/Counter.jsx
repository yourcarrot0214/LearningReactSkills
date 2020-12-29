import React, { useState } from "react";
import store from "../setup/reduxStore";

const Counter = () => {
  const [Size, setSize] = useState(0);

  const getSize = (event) => {
    setSize(Number(event.currentTarget.value));
  };

  const increaseNumber = () => {
    store.dispatch({ type: "INCREASE", number: Size });
  };

  const decreaseNumber = () => {
    store.dispatch({ type: "DECREASE", number: Size });
  };

  return (
    <div className="component">
      <h2>Counter Component</h2>
      <button onClick={increaseNumber}>INCREASE</button>
      <button onClick={decreaseNumber}>DECREASE</button>
      <input type="text" onChange={getSize} />
    </div>
  );
};

export default Counter;
