"use strict";
const Constants = require ("../../../Constants");
const RecklessChargeBase = require("../setEMA/RecklessCharge");

class RecklessCharge extends RecklessChargeBase {
  constructor (game) {
    super(game, "Reckless Charge", "Vintage Masters", "VMA");
  }
}

module.exports = RecklessCharge;
