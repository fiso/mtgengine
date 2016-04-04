"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SearingBlaze extends Card {
  constructor(game) {
    super(game, "Searing Blaze", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = SearingBlaze;
