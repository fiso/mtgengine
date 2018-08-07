"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JourneyersKite extends UnimplementedCard {
  constructor (game) {
    super(game, "Journeyer's Kite", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = JourneyersKite;
