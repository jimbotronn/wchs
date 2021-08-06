import React from "react";
import HomeTwo from "../views/all-home-version/HomeTwo";
import HomeFour from "../views/all-home-version/HomeFour";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/home-two" component={HomeTwo} />
           <Route path="/wchs" component={HomeFour} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
