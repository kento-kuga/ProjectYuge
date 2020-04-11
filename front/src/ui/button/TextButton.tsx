import React from "react";
import { Button } from "semantic-ui-react";

interface props {
  text: string;
}

const TextButton = (props: props) => {
  return <Button> {props.text}</Button>;
};

export default TextButton;
