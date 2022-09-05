import "./App.css";
import Teacher from "./components/Teacher";
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from "./components/Profile";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact render={() => <Teacher />} />
          <Route path="/Profile" exact render={() => <Profile />} />
        </div>
      </Router>
    );
  }
}
export default App;
