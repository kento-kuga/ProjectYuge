import React from "react";
import { Button } from "semantic-ui-react";
import { CenterContainer } from "../ui/layout/center-container";
import { Row } from "../ui/layout/row";
import { Logo } from "../ui/layout/logo";
import { LeftLabelForm } from "../ui/form/left-label-form";

interface props {}

const Login = (props: props) => {
  return (
    <CenterContainer>
      <Logo />
      <LeftLabelForm label="アカウント名" />
      <Row>
        <Button>Pre</Button>
        <Button>Next</Button>
      </Row>
    </CenterContainer>
  );
};

export default Login;
