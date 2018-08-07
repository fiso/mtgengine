"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoldnightRedeemer extends UnimplementedCard {
  constructor (game) {
    super(game, "Goldnight Redeemer", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = GoldnightRedeemer;
