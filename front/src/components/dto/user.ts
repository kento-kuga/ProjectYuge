export class UserRes {
  result: Result = new Result();
}

export class Result {
  response: Response = new Response();
}

export class Response {
  players: Player[] = [];
}

export class Player {
  steamid: string = "";
  communityvisibilitystate: number = 0;
  profilestate: number = 0;
  personaname: string = "";
  profileurl: string = "";
  avatar: string = "";
  avatarmedium: string = "";
  avatarfull: string = "";
  lastlogoff: number = 0;
  personastate: number = 0;
  realname: string = "";
  primaryclanid: string = "";
  timecreated: number = 0;
  personastateflags: number = 0;
  loccountrycode: string = "";
}
