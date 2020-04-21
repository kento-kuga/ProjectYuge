import React from "react";
import * as UI from "semantic-ui-react";

interface Props {}

export const CenterPanel: React.FC<Props> = ({ children, ...props }) => {
  return (
    <>
      <UI.Segment className="center-panel">{children}</UI.Segment>
    </>
  );
};
