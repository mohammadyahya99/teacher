import React, { Component } from "react";
import "../styles/profile.css";

class Profile extends Component {
  render() {
    return (
      <div>
        <div className="info">
          <div className="userName">
            <h2>Mohammad</h2>
          </div>
          <div className="userInfo">
            <h3>Informations</h3>

            <div className="myData">
              <h4>Email :</h4>
              <p>alex@gmail.com</p>

              <h4>Password :</h4>
              <p>555555</p>

              <h4>gender :</h4>
              <p>male</p>
            </div>

            <a href="#blackout" data-toggle="box" data-target="#blackout">
              <button className="modify">Modify Data</button>
            </a>
            <div id="blackout">
              <div id="box">
                <form className="modifyData">
                  <a href="#" className="close">
                    <i className="far fa-times-circle"></i>
                  </a>
                  <div className="newData">
                    <input
                      classname="newDataInput"
                      placeholder="New Name"
                    ></input>
                    <input
                      classname="newDataInput"
                      placeholder="New Email"
                    ></input>
                    <input
                      classname="newDataInput"
                      type="password"
                      placeholder="New Password"
                    ></input>
                    <input
                      classname="newDataInput"
                      type="password"
                      placeholder="Confirm password"
                    ></input>
                    <select classname="newDataInput" className="drop">
                      <option value="" disabled selected>
                        Gender
                      </option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
