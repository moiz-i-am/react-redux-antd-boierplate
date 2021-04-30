import React from "react";
import { Switch, Route } from "react-router-dom";

import CheckIfLoggedIn from "./Components/CheckIfLoggedIn/CheckIfLoggedIn";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import GuestRoute from "./Components/GuestRoute/GuestRoute";

import { Login, Home, Dashboard } from "./views";

const Routes = (props) => {
  return (
    <CheckIfLoggedIn history={props.history}>
      <Switch>
        <PrivateRoute
          history={props.history}
          exact
          path="/dashboard"
          component={Dashboard}
        />
        <GuestRoute
          history={props.history}
          exact
          path="/home"
          component={Home}
        />
        <GuestRoute
          history={props.history}
          exact
          path="/login"
          component={Login}
        />
      </Switch>
    </CheckIfLoggedIn>
  );
};

export default Routes;
