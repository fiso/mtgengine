"use strict";
const Constants = require ("../../../Constants");
const UnholyStrengthBase = require("../setATH/UnholyStrength");

class UnholyStrength extends UnholyStrengthBase {
  constructor(game) {
    super(game, "Unholy Strength", "Magic 2010", "M10");
  }
}

module.exports = UnholyStrength;
