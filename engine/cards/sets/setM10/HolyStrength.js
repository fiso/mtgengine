"use strict";
const Constants = require ("../../../Constants");
const HolyStrengthBase = require("../setCED/HolyStrength");

class HolyStrength extends HolyStrengthBase {
  constructor(game) {
    super(game, "Holy Strength", "Magic 2010", "M10");
  }
}

module.exports = HolyStrength;
