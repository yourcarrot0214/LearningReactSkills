import React from "react";

const Display = (props) => {
  return (
    <div className="component">
      <h2>Display Component</h2>
      <input type="text" value={props.number} readOnly />
    </div>
  );
};

export default Display;

/*
  Redux의 기능들을 사용하면 하나의 store를 공유하는 Redux의 특성상
  Redux에 종속된 component가 됩니다.
  Redux 기능을 container에 이전하면 Display component는
  부모 component로부터 props를 받아서 사용할 수 있는 component가 됩니다.
*/
