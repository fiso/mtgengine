"use strict";
const Constants = require ("../../../Constants");
const ConsumeStrengthBase = require("../setDDM/ConsumeStrength");

class ConsumeStrength extends ConsumeStrengthBase {
  constructor (game) {
    super(game, "Consume Strength", "Apocalypse", "APC");
  }
}

module.exports = ConsumeStrength;
