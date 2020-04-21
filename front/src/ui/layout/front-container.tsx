import React from "react";
import * as UI from "semantic-ui-react";

interface Props {}

export const FrontContainer: React.FC<Props> = ({ children, ...props }) => {
  return (
    <>
      <UI.Container>{children}</UI.Container>
    </>
  );
};
