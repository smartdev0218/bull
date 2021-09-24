import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from "react-router-dom"
import "./index.css";
import App from "./App";
import Providers from "./Providers"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Providers>
        <App />
      </Providers>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
