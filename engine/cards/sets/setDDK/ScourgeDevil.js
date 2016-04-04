"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScourgeDevil extends Card {
  constructor(game) {
    super(game, "Scourge Devil", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = ScourgeDevil;
