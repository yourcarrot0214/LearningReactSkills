/*
  Redux는 하나의 store를 가집니다.
  이 store에 state값을 저장하고, 가져오고 하는 행위는 엄격히 통제됩니다.
  store는 createStore로 생성되며 이때 파라미터로 reducer 함수를 필요로 합니다.
  아래 createStore 함수에 있는 function(state, action)이 reducer 함수입니다.
  reducer 함수는 state와 action 파라미터를 가집니다.
  state는 store 내부에 저장될 값입니다.
  action은 dispatch() method로 전달받게될 객체인데 type 값이 필수로 요구됩니다.
  reducer 함수는 action.type값에 따라 다양한 역할을 수행하고 결과값으로 변경된 state값을 return 합니다.
  store.subscribe() method를 통해 파라미터로 store의 state 변경여부를 해당 component에서
  인지할 수 있으며 store.getState()를 통해 변경된 state값을 받을 수 있습니다.
*/

import { createStore } from "redux";

export default createStore(function (state, action) {
  // 최초 store 호출시 state 값을 설정
  if (state === undefined) {
    return { number: 0 };
  }

  // newState에는 dispatch로 전달받은 값을 저장하며 원본 state의 불변성을
  // 유지하며 state값을 변경하는데 사용합니다.
  let newState = 0;

  // dispatch로 전달받은 action의 type에 따라 해당 작업을 수행 후 newState를 반환합니다.
  if (action.type === "INCREASE") {
    newState = { ...state, number: state.number + action.number };
  } else if (action.type === "DECREASE") {
    newState = { ...state, number: state.number - action.number };
  }

  // 변경 전 state값과 변경 후 state값을 비교합니다.
  console.log("state : ", state, "newState : ", newState);
  return newState;
}, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());
