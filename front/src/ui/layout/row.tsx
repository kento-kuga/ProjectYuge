import React from "react";
import * as UI from "semantic-ui-react";

interface Props {}

export const Row: React.FC<Props> = ({ children, ...props }) => {
  return (
    <>
      <UI.GridRow>
        <UI.GridColumn>{children}</UI.GridColumn>
      </UI.GridRow>
    </>
  );
};
