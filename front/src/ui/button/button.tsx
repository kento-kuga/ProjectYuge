import React from "react";
import * as UI from "semantic-ui-react";
interface Props {
  /** ボタンのラベル */
  label: string;
  /** 非活性フラグ */
  isDisable?: boolean;
  /** クリックイベントハンドラ */
  onClick?: () => void;
  /** 追加スタイル */
  className?: string;
}

export const Button = (props: Props) => {
  const handleClick = (event: React.SyntheticEvent) => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <>
      <UI.Button
        color="black"
        onClick={handleClick}
        disabled={props.isDisable}
        className={props.className}
      >
        {props.label}
      </UI.Button>
    </>
  );
};
