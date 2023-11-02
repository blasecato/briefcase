import React from "react";
import Home from "./Home/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const Public = () => {
  return (
    <>
      <div className="contentClient">
        <Router>
          <Switch className="h-100">
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </Router>
      </div>
      <div className="conttainer-float-back"></div>
    </>
  );
};
