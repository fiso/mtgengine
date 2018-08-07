"use strict";
const Constants = require ("../../../Constants");
const RecklessChargeBase = require("../setEMA/RecklessCharge");

class RecklessCharge extends RecklessChargeBase {
  constructor (game) {
    super(game, "Reckless Charge", "Odyssey", "ODY");
  }
}

module.exports = RecklessCharge;
