"use strict";
const Constants = require ("../../../Constants");
const UnholyStrengthBase = require("../setATH/UnholyStrength");

class UnholyStrength extends UnholyStrengthBase {
  constructor (game) {
    super(game, "Unholy Strength", "Seventh Edition", "7ED");
  }
}

module.exports = UnholyStrength;
