import React from "react";
import { Switch, Route } from "react-router-dom";

import CheckIfLoggedIn from "./Components/CheckIfLoggedIn/CheckIfLoggedIn";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import GuestRoute from "./Components/GuestRoute/GuestRoute";

import { Login, Dashboard } from "./views";
import Inspectors from "./views/Dashboard/Components/Inspectors";
import Properties from "./views/Dashboard/Components/Properties/Properties";

const Routes = (props) => {
  return (
    <CheckIfLoggedIn history={props.history}>
      <Switch>
        <PrivateRoute
          history={props.history}
          exact
          path="/"
          component={Dashboard}
        />
        <PrivateRoute
          history={props.history}
          exact
          path="/inspectors"
          component={Inspectors}
        />
        <PrivateRoute
          history={props.history}
          exact
          path="/properties"
          component={Properties}
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
