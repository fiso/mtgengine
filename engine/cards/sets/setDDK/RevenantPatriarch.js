"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RevenantPatriarch extends Card {
  constructor(game) {
    super(game, "Revenant Patriarch", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = RevenantPatriarch;
