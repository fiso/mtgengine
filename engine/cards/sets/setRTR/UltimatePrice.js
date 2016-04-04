"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UltimatePriceBase = require("../setDTK/UltimatePrice.js");

class UltimatePrice extends UltimatePriceBase {
  constructor(game) {
    super(game, "Ultimate Price", "Return to Ravnica", "RTR");
  }
}

module.exports = UltimatePrice;
