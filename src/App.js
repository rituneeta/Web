import React from "react";
import "./App.scss";
import LandingPage from "./Pages/landingPage/landingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./Pages/signUp/signup";
import SignIn from "./Pages/signIn/signIn";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/signIn" component={SignIn} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
