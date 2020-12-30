import Display from "../redux-components/Display";
import { connect } from "react-redux";

// react-redux code
function mapReduxStateToReactProps(state) {
  return {
    number: state.number
  };
}

export default connect(mapReduxStateToReactProps)(Display);

/*
// redux code
import React, { useState } from "react";
import store from "../redux-setup/reduxStore";

export default function () {
  const [Number, setNumber] = useState(store.getState().number);
  store.subscribe(() => {
    setNumber(store.getState().number);
  });
  return <Display number={Number} />;
}
*/

/*
  Display component가 가지고 있던 state와 subscribe 기능을
  DisplayContainer component로 이식합니다.
  이후 Display component는 Redux의 종속성으로부터 벗어나
  부모 component로부터 props를 받아서 사용할 수 있는 재사용 가능한 component가 됩니다.
*/
