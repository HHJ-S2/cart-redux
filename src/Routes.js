import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from "./Pages/ProductList";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ProductList} />
      </Switch>
    </Router>
  );
}

export default Routes;
