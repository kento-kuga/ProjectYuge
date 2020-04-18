import React from "react";
import * as UI from "semantic-ui-react";
import styles from "./layout.module.css";
import logo from "../../core/assets/yuge_logo.png";

interface Props {}

export const Logo: React.FC<Props> = ({ children, ...props }) => {
  return (
    <>
      <UI.Header as="h1">
        <UI.Image src={logo} />
        <UI.HeaderContent>
          <h1 className="logo-title">yuge</h1>
        </UI.HeaderContent>
      </UI.Header>
    </>
  );
};
