"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SafePassage extends Card {
  constructor(game) {
    super(game, "Safe Passage", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = SafePassage;
