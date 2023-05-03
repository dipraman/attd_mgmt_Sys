import React from "react";
import ReactDOM from "react-dom";
import { Switch, Redirect, Route } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Teacher from "./Teacher";
import "./Login.css";
import Attendance from "./Attendance";
import Admin from "./Admin";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/Teacher" component={Teacher} />
      <Route exact path="/Admin" component={Admin} />
      
      <Route path="/Attendance" component={Attendance} />
      {/* <Route component={NotFound}/> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
