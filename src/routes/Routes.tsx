import React from "react";

// Native
import { Route, Switch, BrowserRouter } from "react-router-dom";

// Pages
import Home from "pages/Home";
import PageError from "pages/PageError";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={PageError} path="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
