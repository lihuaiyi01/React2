import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage/";
import LoginPage from "../pages/LoginPage/";
import UserPage from "../pages/UserPage/";

// const routes = [{
//   path: '',component: ''
// }]

export default function Routes(props) {
  return (
    <Router>
      {/* 能获取到history location match吗，来自context */}
      {/* <BottomNav /> */}

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/user" component={UserPage} />
      </Switch>
    </Router>
  );
}
