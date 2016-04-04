"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Decompose extends Card {
  constructor(game) {
    super(game, "Decompose", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = Decompose;
