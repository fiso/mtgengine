"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Angel extends UnimplementedCard {
  constructor (game) {
    super(game, "Angel", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = Angel;
