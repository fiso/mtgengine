"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RampantGrowth extends UnimplementedCard {
  constructor (game) {
    super(game, "Rampant Growth", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = RampantGrowth;
