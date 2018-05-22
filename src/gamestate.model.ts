import {Player} from "./player.model";
import {Card} from "./card.model";

export class Gamestate {

    constructor(

        public tournament_id: string,
        public game_id: string,
        public round: number,
        public bet_index: number,
        public small_blind: number,
        public current_buy_in: number,
        public pot: number,
        public minimum_raise: number,
        public dealer: number,
        public orbits: number,
        public in_action: number,

        public players: Player[],
        public community_cards: Card[]

    ) {}

}