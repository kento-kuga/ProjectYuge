import React from "react";
import * as UI from "semantic-ui-react";
interface Props {
  label: string;
}

export const LeftLabelForm: React.FC<Props> = ({ children, ...props }) => {
  return (
    <>
      <UI.Form>
        <UI.FormField inline>
          <label className="left-label-form-label ">{props.label}</label>
          <UI.Input className="left-label-form-input" />
        </UI.FormField>
      </UI.Form>
    </>
  );
};
