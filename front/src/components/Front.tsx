import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";

interface props {}

const Front = (props: props) => {
  return (
    <>
      <Switch>
        <Route exact path={"/"}>
          <Redirect to={"/login"} />
        </Route>
        <Route path={"/login"} component={Login} />
      </Switch>
    </>
  );
};

export default Front;
