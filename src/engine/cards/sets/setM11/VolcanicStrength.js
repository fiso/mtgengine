"use strict";
const Constants = require ("../../../Constants");
const VolcanicStrengthBase = require("../setM13/VolcanicStrength");

class VolcanicStrength extends VolcanicStrengthBase {
  constructor (game) {
    super(game, "Volcanic Strength", "Magic 2011", "M11");
  }
}

module.exports = VolcanicStrength;
