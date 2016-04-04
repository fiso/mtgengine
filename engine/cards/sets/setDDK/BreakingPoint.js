"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BreakingPoint extends Card {
  constructor(game) {
    super(game, "Breaking Point", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = BreakingPoint;
