"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CobbledWings extends UnimplementedCard {
  constructor (game) {
    super(game, "Cobbled Wings", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = CobbledWings;
