"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Elephant extends UnimplementedCard {
  constructor(game) {
    super(game, "Elephant", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = Elephant;
