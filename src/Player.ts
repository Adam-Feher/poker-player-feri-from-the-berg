import {Gamestate} from "./gamestate.model";

export class Player {

  public betRequest(gameState: Gamestate, betCallback: (bet: number) => void): void {
    console.log(gameState);
      const activePlayers = gameState.players.filter(player => player.stack > 0);

      let hero = null;
      for (let player of activePlayers) {
          if (player.hasOwnProperty('hole_cards')) {
              hero = player;
          }
        }


      if (activePlayers.length > 3) {
          this.basicStrat(hero, betCallback);
      }else if (activePlayers.length == 3) {
          if (hero.stack == Math.min(...activePlayers.map(player => player.stack))) {
              this.basicStrat(hero,betCallback)
          }else{
              betCallback(0);
          }
      }else{
        this.basicStrat(hero, betCallback);
      }
    }

    private basicStrat(hero: any, betCallback: (bet: number) => void) {
        if (hero.hole_cards[0].rank == hero.hole_cards[1].rank ||
            (hero.hole_cards.filter(card => card.rank == 'A').length > 0 &&
                hero.hole_cards.filter(card => this.contains(card.rank, ['K', 'Q', 'J', '10', '9']))) ||
            (hero.hole_cards.filter(card => card.rank == 'K').length > 0 &&
                hero.hole_cards.filter(card => this.contains(card.rank, ['Q', 'J', '10']))) ||
            (hero.hole_cards.filter(card => card.rank == 'Q').length > 0 &&
                hero.hole_cards.filter(card => this.contains(card.rank, ['J', '10'])))) {
            betCallback(hero.stack);
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
