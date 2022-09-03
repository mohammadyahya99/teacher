import React, { Component } from "react";
import "../styles/teacher.css";
import Addcourse from "./Addcourse";
import Course from "./Course";

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
          <button className="myProfile">My Profile</button>
        </div>
        <Addcourse add={this.add} />
        <hr></hr>
        {this.state.courses.map((t) => (
          <Course data={t} delete={this.delete} />
        ))}
      </div>
    );
  }
}

export default Teacher;
