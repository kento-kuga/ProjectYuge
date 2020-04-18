import React from "react";
import * as UI from "semantic-ui-react";
import styles from "./layout.module.css";

interface Props {}

export const CenterContainer: React.FC<Props> = ({ children, ...props }) => {
  return (
    <>
      <UI.GridRow className="center-container-row">
        <UI.GridColumn textAlign="center" verticalAlign="middle">
          {children}
        </UI.GridColumn>
      </UI.GridRow>
    </>
  );
};
