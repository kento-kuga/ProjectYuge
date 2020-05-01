import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import { FrontContainer } from "../ui/layout/front-container";
import Top from "./Top";

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
          <Route path={"/top"} component={Top} />
        </Switch>
      </FrontContainer>
    </>
  );
};

export default Front;
