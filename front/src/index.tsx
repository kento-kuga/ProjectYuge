import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./semantic/dist/semantic.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./core/css/style.scss";

import Front from "./components/Front";

ReactDOM.render(
  <Router>
    <Front />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
