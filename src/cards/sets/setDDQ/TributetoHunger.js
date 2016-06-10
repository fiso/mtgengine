"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TributetoHunger extends UnimplementedCard {
  constructor (game) {
    super(game, "Tribute to Hunger", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = TributetoHunger;
