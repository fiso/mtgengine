"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Blightning extends Card {
  constructor(game) {
    super(game, "Blightning", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = Blightning;
