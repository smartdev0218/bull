import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import MyBulls from "./Components/MyBulls/MyBulls"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/mybulls">
          <MyBulls />
        </Route>
        <Route exact path="/buyabull">
          <Home />
        </Route>
        <Route exact path="/howitworks">
          <Home />
        </Route>
        <Route exact path="/roadmap">
          <Home />
        </Route>
        <Route exact path="/team">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
