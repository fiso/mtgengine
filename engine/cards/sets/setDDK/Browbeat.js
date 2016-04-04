"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Browbeat extends Card {
  constructor(game) {
    super(game, "Browbeat", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = Browbeat;
