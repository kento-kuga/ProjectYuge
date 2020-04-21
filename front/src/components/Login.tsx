import React from "react";
import { CenterContainer } from "../ui/layout/center-container";
import { Logo } from "../ui/layout/logo";
import { Button } from "../ui/button/button";
import { ButtonArea } from "../ui/layout/button-area";
import { Row } from "../ui/layout/row";
import { UnderLineForm } from "../ui/form/under-line-form";
import { CenterPanel } from "../ui/layout/center-panel";
import { LoginInfo } from "./dto/login";

interface props {}

const Login = (props: props) => {
  //ステート
  //ログイン情報
  const [loginInfo, setLoginInfo] = React.useState(new LoginInfo());
  //

  //初期処理
  React.useEffect(() => {}, []);

  //ハンドラ
  //Nextボタン押下時
  const handleNext = () => {};

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
          <UnderLineForm
            name="accountName"
            value={loginInfo.accountName}
            onChange={handleChange}
            placeholder="アカウント名を入力"
          />
          <ButtonArea className="login-button-area">
            <Button
              className="login-next-button"
              label="Next"
              onClick={handleNext}
            />
          </ButtonArea>
        </CenterPanel>
      </Row>
    </CenterContainer>
  );
};

export default Login;
