import React from "react";
import TextButton from "../ui/TextButton";
import classes from "./App.module.scss";

interface props {}

const App = (props: props) => {
  return (
    <>
      <div className={classes.AppButtom}>
        <TextButton text="Hello World" />
      </div>
    </>
  );
};

export default App;
