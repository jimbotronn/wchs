import React from "react";
import Preview from "../views/Preview";
import HomeTwo from "../views/all-home-version/HomeTwo";
import HomeFour from "../views/all-home-version/HomeFour";
import NotFound from "../views/NotFound";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
        <Route exact path='/' component={Preview} />
          <Route path='/sponsor' component={HomeTwo} />
           <Route path='/donate' component={HomeFour} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
