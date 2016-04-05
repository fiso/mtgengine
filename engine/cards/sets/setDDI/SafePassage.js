"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SafePassage extends UnimplementedCard {
  constructor(game) {
    super(game, "Safe Passage", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = SafePassage;
