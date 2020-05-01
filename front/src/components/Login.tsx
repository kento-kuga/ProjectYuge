import React from "react";
import { CenterContainer } from "../ui/layout/center-container";
import { Logo } from "../ui/layout/logo";
import { Button } from "../ui/button/button";
import { ButtonArea } from "../ui/layout/button-area";
import { Row } from "../ui/layout/row";
import { UnderLineForm } from "../ui/form/under-line-form";
import { CenterPanel } from "../ui/layout/center-panel";
import { LoginInfo } from "./dto/login";
import { useHistory } from "react-router";

interface props {}

const Login = (props: props) => {
  //ルーター
  const history = useHistory();

  //ステート
  //ログイン情報
  const [loginInfo, setLoginInfo] = React.useState(new LoginInfo());
  //パスワード入力フラグ
  const [passwordFlag, setPasswordFlag] = React.useState(false);

  //初期処理
  React.useEffect(() => {}, []);

  //ハンドラ
  //Nextボタン押下時
  const handleNext = () => {
    setPasswordFlag(true);
  };

  //Preボタン押下時
  const handlePre = () => {
    setLoginInfo((state) => ({
      ...state,
      password: "",
    }));
    setPasswordFlag(false);
  };

  //Loginボタン押下時
  const handleLogin = () => {
    history.push("/top");
  };

  //フォーム変更時
  const handleChange = (name: string, value: string) => {
    setLoginInfo((state) => ({
      ...state,
      [name]: value,
    }));
  };

  return (
    <CenterContainer>
      <Row className="login-logo-row" textAlign="center">
        <Logo />
      </Row>

      <Row textAlign="center">
        <CenterPanel>
          {!passwordFlag && (
            <>
              <UnderLineForm
                name="accountName"
                value={loginInfo.accountName}
                onChange={handleChange}
                placeholder="アカウント名を入力"
              />
              <ButtonArea className="login-button-area">
                <Button
                  className="login-button"
                  label="Next"
                  onClick={handleNext}
                />
              </ButtonArea>
            </>
          )}

          {passwordFlag && (
            <>
              <UnderLineForm
                name="password"
                value={loginInfo.password}
                type="password"
                onChange={handleChange}
                placeholder="パスワードを入力"
              />
              <ButtonArea className="login-button-area">
                <Button
                  className="login-pre-button"
                  label="Pre"
                  onClick={handlePre}
                />
                <Button
                  className="login-button"
                  label="Login"
                  onClick={handleLogin}
                />
              </ButtonArea>
            </>
          )}
        </CenterPanel>
      </Row>
      <h2 style={{ color: "black" }}>
        テスト用
        <br />
        {loginInfo.accountName}
        <br />
        {loginInfo.password}
      </h2>
    </CenterContainer>
  );
};

export default Login;
