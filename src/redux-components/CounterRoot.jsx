import React from "react";
import CounterContainer from "../redux-containers/CounterContainer";

const CounterRoot = () => {
  return (
    <div className="component">
      <h2>CounterRoot Component</h2>
      <CounterContainer />
    </div>
  );
};

export default CounterRoot;
