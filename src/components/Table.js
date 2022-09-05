import React, { Component } from "react";

class Table extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td id="sub1"> </td>
              <td id="sub">8:00-9:30</td>
              <td id="sub">9:30-11:00</td>
              <td id="sub">11:00-12:30</td>
              <td id="sub">12:30-2:00</td>
              <td id="sub">2:00-3:30</td>
              <td id="sub">3:30-4:00</td>
              <td id="sub">4:00-5:30</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id="sub">Sunday</td>
              <td id="box1"></td>
              <td id="box2"></td>
              <td id="box3"></td>
              <td id="blank"></td>
              <td id="box2"></td>
              <td id="box2"></td>
              <td id="sub2"></td>
            </tr>
            <tr>
              <td id="sub">Monday</td>
              <td id="box1"></td>
              <td id="box2"></td>
              <td id="box3"></td>
              <td id="blank"></td>
              <td id="box2"></td>
              <td id="box2"></td>
              <td id="sub2"></td>
            </tr>
            <tr>
              <td id="sub">Tuseday</td>
              <td id="box1"></td>
              <td id="box2"></td>
              <td id="box3"></td>
              <td id="blank"></td>
              <td id="box2"></td>
              <td id="box2"></td>
              <td id="sub2"></td>
            </tr>
            <tr>
              <td id="sub">Wednesday</td>
              <td id="box1"></td>
              <td id="box2"></td>
              <td id="box3"></td>
              <td id="blank"></td>
              <td id="box2"></td>
              <td id="box2"></td>
              <td id="sub2"></td>
            </tr>
            <tr>
              <td id="sub">Thursday</td>
              <td id="box1"></td>
              <td id="box2"></td>
              <td id="box3"></td>
              <td id="blank"></td>
              <td id="box2"></td>
              <td id="box2"></td>
              <td id="sub2"></td>
            </tr>
            <tr>
              <td id="sub">Friday</td>
              <td id="box1"></td>
              <td id="box2"></td>
              <td id="box3"></td>
              <td id="blank"></td>
              <td id="box2"></td>
              <td id="box2"></td>
              <td id="sub2"></td>
            </tr>
            <tr>
              <td id="sub">Saturday</td>
              <td id="box1"></td>
              <td id="box2"></td>
              <td id="box3"></td>
              <td id="blank"></td>
              <td id="box2"></td>
              <td id="box2"></td>
              <td id="sub2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
