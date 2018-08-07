"use strict";
const Constants = require ("../../../Constants");
const SealofStrengthBase = require("../setEMA/SealofStrength");

class SealofStrength extends SealofStrengthBase {
  constructor (game) {
    super(game, "Seal of Strength", "Nemesis", "NEM");
  }
}

module.exports = SealofStrength;
