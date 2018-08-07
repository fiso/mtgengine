"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IncreasingDevotion extends UnimplementedCard {
  constructor (game) {
    super(game, "Increasing Devotion", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = IncreasingDevotion;
