"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Elephant extends Card {
  constructor(game) {
    super(game, "Elephant", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = Elephant;
