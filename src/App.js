import React from "react";
import "./styles.css";
import logo from "./logo.png";
import homeShoesImage from "./home_shoes.png";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LocationProvider } from "react-router-location";
import LoginPage from "./LoginPage";
import StartPage from "./StartPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
