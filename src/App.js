import "./App.css";
import Teacher from "./components/Teacher";
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Teacher></Teacher>
      </Router>
    );
  }
}
export default App;
