"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShrewdHatchling extends Card {
  constructor(game) {
    super(game, "Shrewd Hatchling", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = ShrewdHatchling;
