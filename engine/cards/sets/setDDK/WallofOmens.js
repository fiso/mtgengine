"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofOmens extends Card {
  constructor(game) {
    super(game, "Wall of Omens", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = WallofOmens;
