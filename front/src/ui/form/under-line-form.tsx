import React from "react";
import * as UI from "semantic-ui-react";
interface Props {
  /** プロパティ名 */
  name: string;
  /** 値 */
  value: string;
  /** プレースホルダー */
  placeholder?: string;
  /** 追加スタイル */
  className?: string;
  /** 変更イベントハンドラ。*/
  onChange?: (name: string, value: string) => void;
}

export const UnderLineForm: React.FC<Props> = ({ children, ...props }) => {
  //ハンドラ
  const handleChange = (value: string) => {
    if (props.onChange) {
      props.onChange(props.name, value);
    }
  };

  return (
    <>
      <UI.Form className={"under-line-form" + " " + props.className}>
        <UI.FormField>
          <UI.FormInput
            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
            onChange={(e, data) => handleChange(data.value)}
          ></UI.FormInput>
        </UI.FormField>
      </UI.Form>
    </>
  );
};
