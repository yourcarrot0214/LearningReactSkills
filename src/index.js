import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../src/redux-setup/reduxStore";
import "./styles.css";
// fetch api
// import App from "./App";

// Redux
import ReduxExample from "./redux-components/ReduxExample";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      <ReduxExample />
    </Provider>
  </React.StrictMode>,
  rootElement
);
