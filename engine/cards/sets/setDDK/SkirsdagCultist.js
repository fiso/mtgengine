"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkirsdagCultist extends Card {
  constructor(game) {
    super(game, "Skirsdag Cultist", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = SkirsdagCultist;
