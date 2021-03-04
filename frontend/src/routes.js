import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Edit from "./pages/Edit";
import Create from "./pages/Create";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/create" component={Create} exact></Route>
      <Route path="/edit" component={Edit} exact></Route>
    </Switch>
  );
};
