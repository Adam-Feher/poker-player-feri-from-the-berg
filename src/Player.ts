export class Player {
  public betRequest(gameState: any, betCallback: (bet: number) => void): void {
    console.log(gameState);
    betCallback(gameState.pot);
  }

  public showdown(gameState: any): void {

  }
};

export default Player;
