import React from "react";
import * as UI from "semantic-ui-react";

interface Props {
  /** 揃え位置 */
  textAlign?: "left" | "center" | "right" | "justified";
  /** 追加スタイル */
  className?: string;
}

export const Row: React.FC<Props> = ({ children, ...props }) => {
  return (
    <>
      <UI.GridRow className={props.className}>
        <UI.GridColumn textAlign={props.textAlign}>{children}</UI.GridColumn>
      </UI.GridRow>
    </>
  );
};
