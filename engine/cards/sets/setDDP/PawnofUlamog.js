"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PawnofUlamog extends Card {
  constructor(game) {
    super(game, "Pawn of Ulamog", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = PawnofUlamog;
