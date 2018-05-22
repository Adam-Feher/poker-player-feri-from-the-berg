import {Card} from "./card.model";

export class Player {

    constructor(

        public id: number,
        public name: string,
        public status: string, // TODO: refactor to ENUM
        public version: string,
        public stack: number,
        public bet: number,
        public hole_cards?: Card[]

    ) {}


}