import React, { Component } from "react";
import "../styles/profile.css";

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      inputName: "",
      inputEmail: "",
      newPassword: "",
      confirmPassword: "",
      gender: "",
      user: {
        name: "mohammad",
        email: "yahya@gmail",
        password: "51854156",
        gender: "male",
        img: "",
      },
      custom: { display: "none" },
    };
  }
  nameChanged = (e) => {
    this.setState({ inputName: e.target.value });
  };
  emailChanged = (e) => {
    this.setState({ inputEmail: e.target.value });
  };
  passwordChanged = (e) => {
    this.setState({ newPassword: e.target.value });
  };
  confirmPasswordChanged = (e) => {
    this.setState({ confirmPassword: e.target.value });
  };
  genderChanged = (e) => {
    this.setState({ gender: e.target.value });
  };
  add = (e) => {
    if (e.currentTarget.className === "addModify") {
      if (this.state.newPassword != this.state.confirmPassword) {
        let x = this.state.custom;
        x = { display: "block" };
        this.setState({ custom: x });
      } else {
        let y = {
          name: this.state.inputName,
          email: this.state.inputEmail,
          password: this.state.newPassword,
          gender: this.state.gender,
        };

        this.setState({ user: y });
        window.location = "#";
      }
    }
  };
  printpass = () => {
    let x = "";
    for (let i in this.state.user.password) {
      x += "*";
    }
    console.log(x);
    return x;
  };
  render() {
    return (
      <div>
        <div className="info">
          <div className="userName">
            <h2>{this.state.user.name}</h2>
          </div>
          <div className="userInfo">
            <h3>Informations</h3>

            <div className="myData">
              <h4>Email :</h4>
              <p>{this.state.user.email}</p>

              <h4>Password :</h4>
              <p>{this.printpass()}</p>

              <h4>gender :</h4>
              <p>{this.state.user.gender}</p>
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
                      value={this.state.inputName}
                      onChange={this.nameChanged}
                      classname="newDataInput"
                      placeholder="New Name"
                    ></input>
                    <input
                      value={this.state.inputEmail}
                      onChange={this.emailChanged}
                      classname="newDataInput"
                      placeholder="New Email"
                    ></input>
                    <div className="errorMassege" style={this.state.custom}>
                      password did not match
                    </div>
                    <input
                      value={this.state.newPassword}
                      onChange={this.passwordChanged}
                      classname="newDataInput"
                      type="password"
                      placeholder="New Password"
                    ></input>
                    <input
                      value={this.state.confirmPassword}
                      onChange={this.confirmPasswordChanged}
                      classname="newDataInput"
                      type="password"
                      placeholder="Confirm password"
                    ></input>
                    <select
                      value={this.state.gender}
                      onChange={this.genderChanged}
                      classname="newDataInput"
                      className="drop"
                    >
                      <option value="" disabled selected>
                        Gender
                      </option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>

                  <a className="modifyContainer">
                    <div onClick={this.add} className="addModify">
                      Modify
                    </div>
                  </a>
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
