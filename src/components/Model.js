import React, { Component } from "react";
import "../styles/model.css";

class Model extends Component {
  constructor() {
    super();

    this.state = {
      searchStuts: "",
      courses: [
        { courseName: "css", status: "In progress" },
        { courseName: "html", status: "past" },
        { courseName: "java", status: "In progress" },
        { courseName: "java", status: "In progress" },
        { courseName: "java", status: "In progress" },
        { courseName: "java", status: "In progress" },
        { courseName: "java", status: "In progress" },
        { courseName: "java", status: "In progress" },
        { courseName: "java", status: "In progress" },
        { courseName: "java", status: "In progress" },
        { courseName: "java", status: "In progress" },
        { courseName: "java", status: "In progress" },
        { courseName: "java", status: "In progress" },
        { courseName: "java", status: "In progress" },
        { courseName: "java", status: "In progress" },
        { courseName: "java", status: "In progress" },
        { courseName: "java", status: "In progress" },
        { courseName: "java", status: "In progress" },
        { courseName: "java", status: "In progress" },
        { courseName: "java", status: "In progress" },
        { courseName: "java", status: "In progress" },
        { courseName: "java", status: "In progress" },
        { courseName: "java", status: "In progress" },
        { courseName: "java", status: "In progress" },
        { courseName: "java", status: "In progress" },
        { courseName: "java", status: "In progress" },
        { courseName: "java", status: "In progress" },
        { courseName: "java", status: "In progress" },
        { courseName: "java", status: "In progress" },
      ],
      inprogress: [],
      past: [],
    };
  }
  courseFilter = (e) => {
    this.setState({ searchStuts: e.target.value });
    let progress = [];
    let past = [];
    this.state.courses.map((t) => {
      if (t.status === "In progress") {
        progress.push(t);
      } else {
        past.push(t);
      }
    });
    this.setState({ inprogress: progress, past: past });
  };
  render() {
    return (
      <div>
        <div className="coursesContainer">
          <select
            className="typeCourseInput"
            value={this.state.searchStuts}
            onChange={this.courseFilter}
          >
            <option value="" disabled selected>
              Courses
            </option>
            <option value="in progress">In progress</option>
            <option value="past">past</option>
          </select>
          <div className="courses">
            {this.state.searchStuts === "in progress"
              ? this.state.inprogress.map((t) => (
                  <div className="courseDiv">
                    <h3> {t.courseName}</h3>
                  </div>
                ))
              : this.state.past.map((t) => (
                  <div className="courseDiv">
                    <h3> {t.courseName}</h3>
                  </div>
                ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Model;
