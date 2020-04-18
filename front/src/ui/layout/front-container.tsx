import React from "react";
import * as UI from "semantic-ui-react";

interface Props {}

export const FrontContainer: React.FC<Props> = ({ children, ...props }) => {
  return (
    <>
      <UI.Grid container>{children}</UI.Grid>
    </>
  );
};
