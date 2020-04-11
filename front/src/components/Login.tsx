import React from "react";
import TextButton from "../ui/button/TextButton";
import styles from "./css/Login.module.scss";

interface props {}

const Login = (props: props) => {
  return (
    <>
      <div className={styles.LoginButton}>
        <TextButton text="Login"></TextButton>
      </div>
    </>
  );
};

export default Login;
