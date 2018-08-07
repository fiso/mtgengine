"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FetidImp extends UnimplementedCard {
  constructor (game) {
    super(game, "Fetid Imp", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = FetidImp;
