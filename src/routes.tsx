import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ScrollToTop from "./helpers";

import Dashboard from "./pages/Dashboard";

const Routes = () => (
  <Router>
    <ScrollToTop />

    <Switch>
      <Route exact={true} path="/" component={Dashboard} />
    </Switch>
  </Router>
);

export default Routes;
