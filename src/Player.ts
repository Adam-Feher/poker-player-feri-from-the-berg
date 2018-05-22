import {Gamestate} from "./gamestate.model";
import {Card} from "./card.model";

export class Player {

    private heroBet: number;
    private villainBet: number;

    public betRequest(gameState: Gamestate, betCallback: (bet: number) => void): void {
        const activePlayers = gameState.players.filter(player => player.stack > 0);

        let hero = null;
        for (let player of activePlayers) {
            if (player.hasOwnProperty('hole_cards')) {
                hero = player;
            }
        }


        if (activePlayers.length > 3) {
           this.basicStrat(hero, betCallback);
        } else if (activePlayers.length == 3) {
            if (hero.stack == Math.min(...activePlayers.map(player => player.stack))) {
                this.basicStrat(hero, betCallback)
            } else {
                betCallback(0);
            }
        } else {
            console.log(gameState);
            this.basicStrat(hero, betCallback);
        }
    }

    private basicStrat(hero: any, betCallback: (bet: number) => void) {
        if (((hero.hole_cards[0].rank == hero.hole_cards[1].rank) && this.contains(hero.hole_cards[0],['A','K','Q','J','10','9'])) ||
            (this.haveCard('A',hero.hole_cards) &&
                this.haveCardInRange(['K', 'Q', 'J', '10', '9'],hero.hole_cards)) ||
            (this.haveCard('K',hero.hole_cards) &&
                this.haveCardInRange(['Q', 'J', '10'],hero.hole_cards)) ||
            (this.haveCard('Q',hero.hole_cards) &&
                this.haveCardInRange(['J', '10'],hero.hole_cards))) {
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

    private haveCard(what: string, cards: Card[]): boolean {
      return cards.filter(card => card.rank == what).length > 0;
    }

    private haveCardInRange(range: string[], cards: Card[]): boolean {
      return cards.filter(card => this.contains(card.rank, range)).length > 0;
    }

    private sameAsCommunity(card: string, community: Card[]) {
        return this.contains(card, community.map(card => card.rank));
    }

    public showdown(gameState: Gamestate): void {
    }
}

export default Player;
