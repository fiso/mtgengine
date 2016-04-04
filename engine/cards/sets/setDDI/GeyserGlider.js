"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GeyserGlider extends Card {
  constructor(game) {
    super(game, "Geyser Glider", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = GeyserGlider;
