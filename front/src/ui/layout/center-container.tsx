import React from "react";
import * as UI from "semantic-ui-react";

interface Props {}

export const CenterContainer: React.FC<Props> = ({ children, ...props }) => {
  return (
    <>
      <UI.GridRow columns="3" className="center-container-row">
        <UI.GridColumn width="1"></UI.GridColumn>
        <UI.GridColumn width="14" verticalAlign="middle">
          <UI.Grid>{children}</UI.Grid>
        </UI.GridColumn>
        <UI.GridColumn width="1"></UI.GridColumn>
      </UI.GridRow>
    </>
  );
};
