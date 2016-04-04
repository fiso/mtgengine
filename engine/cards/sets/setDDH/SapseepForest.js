"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SapseepForest extends Card {
  constructor(game) {
    super(game, "Sapseep Forest", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = SapseepForest;
