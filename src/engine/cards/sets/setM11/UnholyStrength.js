"use strict";
const Constants = require ("../../../Constants");
const UnholyStrengthBase = require("../setDVD/UnholyStrength");

class UnholyStrength extends UnholyStrengthBase {
  constructor (game) {
    super(game, "Unholy Strength", "Magic 2011", "M11");
  }
}

module.exports = UnholyStrength;
