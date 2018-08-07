"use strict";
const Constants = require ("../../../Constants");
const UltimatePriceBase = require("../setDTK/UltimatePrice");

class UltimatePrice extends UltimatePriceBase {
  constructor (game) {
    super(game, "Ultimate Price", "Magic Online Promos", "PRM");
  }
}

module.exports = UltimatePrice;
