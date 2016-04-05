"use strict";
const Constants = require ("../../../Constants");
const HolyStrengthBase = require("../setCED/HolyStrength");

class HolyStrength extends HolyStrengthBase {
  constructor(game) {
    super(game, "Holy Strength", "Seventh Edition", "7ED");
  }
}

module.exports = HolyStrength;
