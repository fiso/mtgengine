"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FoulImp extends UnimplementedCard {
  constructor (game) {
    super(game, "Foul Imp", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = FoulImp;
