import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import "./index.css";
import { Application } from "./Application";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,

  document.getElementById("root")
);
serviceWorker.unregister();
