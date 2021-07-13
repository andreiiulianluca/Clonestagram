import React from "react";
import Home from "pages/Home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import SignUp from "pages/SignUp";

function App() {
  return (
    <Router>
      <Switch>
        {/* home */}
        <Route exact path="/" component={Home} />
        {/* sign-up */}
        <Route exact path="/signup" component={SignUp} />
        {/* log-in */}
        {/* register */}
        {/* my-page */}
      </Switch>
    </Router>
  );
}

export default App;
