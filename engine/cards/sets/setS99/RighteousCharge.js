"use strict";
const Constants = require ("../../../Constants");
const RighteousChargeBase = require("../setGTC/RighteousCharge");

class RighteousCharge extends RighteousChargeBase {
  constructor(game) {
    super(game, "Righteous Charge", "Starter 1999", "S99");
  }
}

module.exports = RighteousCharge;
