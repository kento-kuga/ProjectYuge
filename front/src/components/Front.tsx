import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import { FrontContainer } from "../ui/layout/front-container";

interface props {}

const Front = (props: props) => {
  return (
    <>
      <FrontContainer>
        <Switch>
          <Route exact path={"/"}>
            <Redirect to={"/login"} />
          </Route>
          <Route path={"/login"} component={Login} />
        </Switch>
      </FrontContainer>
    </>
  );
};

export default Front;
