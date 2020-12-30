import React, { useState } from "react";

const Counter = (props) => {
  const [Size, setSize] = useState(1);

  const getSize = (event) => {
    setSize(Number(event.currentTarget.value));
  };

  const increaseNumber = () => {
    return props.increase(Size);
  };
  const decreaseNumber = () => {
    return props.decrease(Size);
  };

  return (
    <div className="component">
      <h2>Counter Component</h2>
      <button onClick={increaseNumber}>INCREASE</button>
      <button onClick={decreaseNumber}>DECREASE</button>
      <input type="text" value={Size} onChange={getSize} />
    </div>
  );
};

export default Counter;

/*
  Redux에 종속된 기능들을 CounterContainer로 옮겨서
  Counter component의 재사용 가능성을 보장합니다.
*/
