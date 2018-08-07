"use strict";
const Constants = require ("../../../Constants");
const GiantStrengthBase = require("../setVMA/GiantStrength");

class GiantStrength extends GiantStrengthBase {
  constructor (game) {
    super(game, "Giant Strength", "Classic Sixth Edition", "6ED");
  }
}

module.exports = GiantStrength;
