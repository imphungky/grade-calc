import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Calc from "./components/Calc/Calc.js";
import Landing from "./components/Landing-Page/Landing.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/calc" component={Calc} />
      </Switch>
    </Router>
  );
}

export default App;
