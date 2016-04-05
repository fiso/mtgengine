"use strict";
const Constants = require ("../../../Constants");
const VolcanicStrengthBase = require("../setM11/VolcanicStrength");

class VolcanicStrength extends VolcanicStrengthBase {
  constructor(game) {
    super(game, "Volcanic Strength", "Magic 2013", "M13");
  }
}

module.exports = VolcanicStrength;
