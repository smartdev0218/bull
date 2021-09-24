import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./Components/Navbar/Navbar"
import MyBulls from "./Components/MyBulls/MyBulls"
import WalletConnect from "./Components/WalletConnect/WalletConnect";

function App() {
  return (
    <>
      <Navbar />
      <WalletConnect />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/mybulls">
          <MyBulls />
        </Route>
        <Route path="/buyabull">
          <Home />
        </Route>
        <Route path="/howitworks">
          <Home />
        </Route>
        <Route path="/roadmap">
          <Home />
        </Route>
        <Route path="/team">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
