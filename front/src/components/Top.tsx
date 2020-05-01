import React from "react";
import { ApiGet } from "../core/api";
import { Player, UserRes } from "./dto/user";
interface props {}

const Top = (props: props) => {
  const [player, setPlayer] = React.useState(new Player());

  //初期処理
  React.useEffect(() => {
    const getPlayerSummarie = async () => {
      try {
        const resData = await ApiGet<UserRes>("/steam_user/player_summarie");

        setPlayer(resData.result.response.players[0]);
      } catch (error) {
        return;
      }
    };
    getPlayerSummarie();
  }, []);

  return (
    <>
      <h2 style={{ color: "black" }}>
        トップページテスト用
        <br />
        {player.personaname}
        <br />
      </h2>
    </>
  );
};

export default Top;
