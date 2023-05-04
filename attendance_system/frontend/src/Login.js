import React, { Component } from "react";
import swal from "sweetalert";
import { Button, TextField, Link } from "@material-ui/core";
import Attendance from "./Attendance";
const axios = require("axios");
const bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      account_type: "",
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  login = () => {
    const pwd = bcrypt.hashSync(this.state.password, salt);

    axios
      .post("http://localhost:2000/login", {
        username: this.state.username,
        password: pwd,
        account_type: this.state.account_type,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_id", res.data.id);
        localStorage.setItem("account_type", res.data.account_type);
        if (this.state.account_type === "hod")
          this.props.history.push("/dashboard");
        else if (this.state.account_type === "student") {
          this.props.history.push({
            pathname: "/Attendance",
            state: { username: this.state.username }, // pass the username to Attendance
          });
        } else if(this.state.account_type === "teacher"){
          this.props.history.push("/Teacher");
        }
        else{
          this.props.history.push("/Admin");
        }
      })
      .catch((err) => {
        if (
          err.response &&
          err.response.data &&
          err.response.data.errorMessage
        ) {
          swal({
            text: err.response.data.errorMessage,
            icon: "error",
            type: "error",
          });
        }
      });
  };

  render() {
    return (
      <div style={{ marginTop: "200px" }}>
        <div>
          <h2>Login</h2>
          
        </div>
        <div id="logo">
          <img src={require('./mitlogo.jpg')} />
          </div>
        

        <div>
          <TextField
            id="standard-basic"
            type="text"
            autoComplete="off"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
            placeholder="User Name"
            required
          />
          <br />
          <br />
          <TextField
            id="standard-basic"
            type="password"
            autoComplete="off"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            placeholder="Password"
            required
          />
          <br />
          <br />
          <TextField
            id="standard-basic"
            type="text"
            autoComplete="off"
            name="account_type"
            value={this.state.account_type}
            onChange={this.onChange}
            placeholder="Account type"
            required
          />
          <br />
          <br />
          <Button
            className="button_style"
            variant="contained"
            color="primary"
            size="small"
            disabled={this.state.username === "" && this.state.password === ""}
            onClick={this.login}
          >
            Login
          </Button>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="/register">Register</Link>
          <br />
          <br />
          <footer>
          Created by: 
          <p>Prathamesh Pawar</p> <p>Rahul Das</p> <p>Nidhish Shetty</p>
          </footer>
        </div>
      </div>
    );
  }
}
