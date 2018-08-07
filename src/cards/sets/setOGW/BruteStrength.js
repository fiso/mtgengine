"use strict";
const Constants = require ("../../../Constants");
const BruteStrengthBase = require("../setDDT/BruteStrength");

class BruteStrength extends BruteStrengthBase {
  constructor (game) {
    super(game, "Brute Strength", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = BruteStrength;
