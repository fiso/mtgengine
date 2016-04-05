"use strict";
const Constants = require ("../../../Constants");
const GiantStrengthBase = require("../set6ED/GiantStrength");

class GiantStrength extends GiantStrengthBase {
  constructor(game) {
    super(game, "Giant Strength", "Tempest", "TMP");
  }
}

module.exports = GiantStrength;
