"use strict";
const Constants = require ("../../../Constants");
const UnholyStrengthBase = require("../setDVD/UnholyStrength");

class UnholyStrength extends UnholyStrengthBase {
  constructor (game) {
    super(game, "Unholy Strength", "Ninth Edition", "9ED");
  }
}

module.exports = UnholyStrength;
