import React from "react";
import * as UI from "semantic-ui-react";

interface Props {}

export const CenterContainer: React.FC<Props> = ({ children, ...props }) => {
  return (
    <>
      <UI.Grid
        verticalAlign="middle"
        className="center-container-grid"
        textAlign="center"
      >
        <UI.GridColumn className="center-container-column">
          <UI.Grid>{children}</UI.Grid>
        </UI.GridColumn>
      </UI.Grid>
    </>
  );
};
