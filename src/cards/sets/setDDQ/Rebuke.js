"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rebuke extends UnimplementedCard {
  constructor (game) {
    super(game, "Rebuke", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = Rebuke;
