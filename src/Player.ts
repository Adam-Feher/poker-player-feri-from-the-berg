import {Gamestate} from "./gamestate.model";

export class Player {

  public betRequest(gameState: Gamestate, betCallback: (bet: number) => void): void {
    console.log(gameState);
      const activePlayers = gameState.players.filter(player => player.status == 'active');
      const hero = gameState.players.find(player => player.hasOwnProperty('hole_cards'));

      if (activePlayers.length > 2) {
          betCallback(0);
          return;
      }
      if (hero.hole_cards.filter(card => card.rank == 'A').length > 0) {
          betCallback(hero.stack);
      }

  }

  public showdown(gameState: Gamestate): void {
  }
  
  
  
}

export default Player;
