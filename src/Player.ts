import {Gamestate} from "./gamestate.model";

export class Player {

  public betRequest(gameState: Gamestate, betCallback: (bet: number) => void): void {
    console.log(gameState);
      const activePlayers = gameState.players.filter(player => player.status == 'active');
      console.log(activePlayers);
      
      let hero = null;
      for (let player of activePlayers) {
          if (player.hasOwnProperty('hole_cards')) {
              hero = player;
          }
      }

      if (activePlayers.length >= 3) {
          betCallback(0);
          return;
      }
      if (hero.hole_cards.filter(card => card.rank == 'A').length > 0) {
          betCallback(hero.stack);
      }else{
          betCallback(0);
      }

  }

  public showdown(gameState: Gamestate): void {
  }
  
  
  
}

export default Player;
