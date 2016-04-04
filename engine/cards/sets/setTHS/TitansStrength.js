"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TitansStrengthBase = require("../setORI/TitansStrength.js");

class TitansStrength extends TitansStrengthBase {
  constructor(game) {
    super(game, "Titan's Strength", "Theros", "THS");
  }
}

module.exports = TitansStrength;
