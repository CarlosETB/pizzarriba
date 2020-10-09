import React from "react";

// Native
import { Route, Switch, BrowserRouter } from "react-router-dom";

// Pages
import Home from "pages/Home";
import SelectSize from "pages/Select/Size";
import SelectPasta from "pages/Select/Pasta";
import SelectFilling from "pages/Select/Filling";
import PageError from "pages/PageError";

import { OrderProvider } from "store/context";

const Routes = () => {
  return (
    <OrderProvider>
      <BrowserRouter>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={SelectPasta} path="/selecionar/massa" exact />
          <Route component={SelectSize} path="/selecionar/tamanho" exact />
          <Route component={SelectFilling} path="/selecionar/recheio" exact />
          <Route component={PageError} path="/" />
        </Switch>
      </BrowserRouter>
    </OrderProvider>
  );
};

export default Routes;
