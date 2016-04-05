"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GeyserGlider extends UnimplementedCard {
  constructor(game) {
    super(game, "Geyser Glider", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = GeyserGlider;
