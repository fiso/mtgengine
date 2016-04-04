"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DuskhunterBat extends Card {
  constructor(game) {
    super(game, "Duskhunter Bat", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = DuskhunterBat;
