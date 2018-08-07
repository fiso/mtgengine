"use strict";
const Constants = require ("../../../Constants");
const UltimatePriceBase = require("../setDTK/UltimatePrice");

class UltimatePrice extends UltimatePriceBase {
  constructor (game) {
    super(game, "Ultimate Price", "Friday Night Magic 2015", "F15");
  }
}

module.exports = UltimatePrice;
