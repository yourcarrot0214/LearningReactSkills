import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ReduxExample from "./components/ReduxExample";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <ReduxExample />
  </React.StrictMode>,
  rootElement
);
