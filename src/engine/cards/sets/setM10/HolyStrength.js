"use strict";
const Constants = require ("../../../Constants");
const HolyStrengthBase = require("../setM11/HolyStrength");

class HolyStrength extends HolyStrengthBase {
  constructor (game) {
    super(game, "Holy Strength", "Magic 2010", "M10");
  }
}

module.exports = HolyStrength;
