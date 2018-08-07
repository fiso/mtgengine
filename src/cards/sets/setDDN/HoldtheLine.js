"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HoldtheLine extends UnimplementedCard {
  constructor (game) {
    super(game, "Hold the Line", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = HoldtheLine;
