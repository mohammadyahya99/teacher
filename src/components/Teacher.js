import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/teacher.css";
import Addcourse from "./Addcourse";
import Course from "./Course";
import Table from "./Table";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from "./Profile";

class Teacher extends Component {
  constructor() {
    super();

    this.state = {
      courses: [
        { Name: "css", Time: 15, Day: "Monday", noOfStudent: 10 },
        { Name: "html", Time: 25, Day: "Monday", noOfStudent: 10 },
        { Name: "java", Time: 7, Day: "Monday", noOfStudent: 10 },
      ],
    };
  }
  add = (e) => {
    let x = [...this.state.courses];
    x.push(e);
    this.setState({ courses: x });
  };

  delete = (Name) => {
    let x = [...this.state.courses];

    let y = 0;
    for (let i in x) {
      if (x[i].Name === Name) {
        y = i;
        break;
      }
    }
    x.splice(y, 1);
    this.setState({ courses: x });
  };
  render() {
    return (
      <div className="teacher">
        <div className="nav">
          <Link to="/Profile">
            <button className="myProfile">My Profile</button>
          </Link>
        </div>
        <Addcourse add={this.add} />
        <hr></hr>
        <Table />
        {this.state.courses.map((t) => (
          <Course data={t} delete={this.delete} />
        ))}
      </div>
    );
  }
}

export default Teacher;
