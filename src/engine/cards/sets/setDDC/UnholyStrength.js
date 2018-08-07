"use strict";
const Constants = require ("../../../Constants");
const UnholyStrengthBase = require("../setDVD/UnholyStrength");

class UnholyStrength extends UnholyStrengthBase {
  constructor (game) {
    super(game, "Unholy Strength", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = UnholyStrength;
