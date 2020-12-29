import React, { useState } from "react";
import store from "../setup/reduxStore";

const Display = () => {
  const [Number, setNumber] = useState(store.getState().number);
  store.subscribe(() => {
    setNumber(store.getState().number);
  });

  return (
    <div className="component">
      <h2>Display Component</h2>
      <input type="text" value={Number} readOnly />
    </div>
  );
};

export default Display;
