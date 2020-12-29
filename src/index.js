import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
// fetch api
// import App from "./App";

// Redux
import ReduxExample from "./components/ReduxExample";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <ReduxExample />
  </React.StrictMode>,
  rootElement
);
