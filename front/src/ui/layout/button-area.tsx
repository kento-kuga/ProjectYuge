import React from "react";
import * as UI from "semantic-ui-react";

interface Props {
  /** 追加スタイル */
  className?: string;
}

export const ButtonArea: React.FC<Props> = ({ children, ...props }) => {
  return (
    <>
      <UI.GridRow className={props.className}>
        <UI.GridColumn>{children}</UI.GridColumn>
      </UI.GridRow>
    </>
  );
};
