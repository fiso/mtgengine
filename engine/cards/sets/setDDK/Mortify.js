"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Mortify extends Card {
  constructor(game) {
    super(game, "Mortify", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = Mortify;
