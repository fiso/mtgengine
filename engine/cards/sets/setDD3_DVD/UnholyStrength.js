"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UnholyStrengthBase = require("../setATH/UnholyStrength.js");

class UnholyStrength extends UnholyStrengthBase {
  constructor(game) {
    super(game, "Unholy Strength", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = UnholyStrength;
