"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PawnofUlamog extends UnimplementedCard {
  constructor(game) {
    super(game, "Pawn of Ulamog", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = PawnofUlamog;
