"use strict";
const Constants = require ("../../../Constants");
const TitansStrengthBase = require("../setORI/TitansStrength");

class TitansStrength extends TitansStrengthBase {
  constructor(game) {
    super(game, "Titan's Strength", "Theros", "THS");
  }
}

module.exports = TitansStrength;
