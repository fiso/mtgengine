"use strict";
const Constants = require ("../../../Constants");
const GiantStrengthBase = require("../setVMA/GiantStrength");

class GiantStrength extends GiantStrengthBase {
  constructor (game) {
    super(game, "Giant Strength", "Legends", "LEG");
  }
}

module.exports = GiantStrength;
