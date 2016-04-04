"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BreakingPoint extends UnimplementedCard {
  constructor(game) {
    super(game, "Breaking Point", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = BreakingPoint;
