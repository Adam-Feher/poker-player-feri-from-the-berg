import {Gamestate} from "./gamestate.model";
import {Card} from "./card.model";

export class Player {

    public betRequest(gameState: Gamestate, betCallback: (bet: number) => void): void {
        console.log(gameState);
        const activePlayers = gameState.players.filter(player => player.stack > 0);
        console.log(activePlayers);

        let hero = null;
        for (let player of activePlayers) {
          if (player.hasOwnProperty('hole_cards')) {
              hero = player;
          }
        }

        if (activePlayers.length > 3) {
          betCallback(0);
          return;
        }
        if (hero.hole_cards.filter(card => card.rank == 'A').length > 0 || hero.hole_cards[0].rank == hero.hole_cards[1].rank) {
          betCallback(hero.stack);
        }else{
          betCallback(0);
        }
    }

    private contains(card: string, range: string[]): boolean {
        for (let item of range) {
            if (item == card) {
                return true;
            }
        }
        return false;
    }

    public showdown(gameState: Gamestate): void {
    }
  
  
  
}

export default Player;
