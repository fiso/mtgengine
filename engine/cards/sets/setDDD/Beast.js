"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Beast extends Card {
  constructor(game) {
    super(game, "Beast", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = Beast;
