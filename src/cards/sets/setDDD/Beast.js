"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Beast extends UnimplementedCard {
  constructor(game) {
    super(game, "Beast", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = Beast;
