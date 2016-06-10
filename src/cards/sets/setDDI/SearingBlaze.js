"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SearingBlaze extends UnimplementedCard {
  constructor (game) {
    super(game, "Searing Blaze", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = SearingBlaze;
