import {Gamestate} from "./gamestate.model";

export class Player {

  public betRequest(gameState: Gamestate, betCallback: (bet: number) => void): void {
    console.log(gameState);
    betCallback(gameState.pot);
  }

  public showdown(gameState: Gamestate): void {
  }
}

export default Player;
