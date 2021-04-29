import React from "react";
import { Switch, Route } from "react-router-dom";

import { Login } from "./views";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
    </Switch>
  );
};

export default Routes;
