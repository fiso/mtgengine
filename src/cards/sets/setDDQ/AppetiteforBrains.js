"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AppetiteforBrains extends UnimplementedCard {
  constructor (game) {
    super(game, "Appetite for Brains", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = AppetiteforBrains;
