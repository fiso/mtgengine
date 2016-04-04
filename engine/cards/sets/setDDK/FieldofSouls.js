"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FieldofSouls extends Card {
  constructor(game) {
    super(game, "Field of Souls", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = FieldofSouls;
