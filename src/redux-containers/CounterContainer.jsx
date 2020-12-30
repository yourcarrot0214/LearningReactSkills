import React from "react";
import store from "../redux-setup/reduxStore";
import Counter from "../redux-components/Counter";

export default function () {
  const increaseNumber = (size) => {
    console.log("increase function");
    store.dispatch({ type: "INCREASE", number: size });
  };
  const decreaseNumber = (size) => {
    console.log("decrease function");
    store.dispatch({ type: "DECREASE", number: size });
  };

  return <Counter increase={increaseNumber} decrease={decreaseNumber} />;
}

/*
  Counter component의 Redux에 종속된 기능을 CounterContainer component로 옮깁니다.
  Redux에 연관된 기능들(dispatch 등)을 CounterContainer component에서 처리하고,
  Counter component는 재사용 가능한 component가 됩니다.
*/
