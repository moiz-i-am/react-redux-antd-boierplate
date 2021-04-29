import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import "./styles/index.css";

import App from "./App";
import Routes from "./routes";

import store from "./Config/Store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App>
          <Routes />
        </App>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
