"use strict";
const Constants = require ("../../../Constants");
const RighteousChargeBase = require("../setGTC/RighteousCharge");

class RighteousCharge extends RighteousChargeBase {
  constructor(game) {
    super(game, "Righteous Charge", "Masters Edition IV", "ME4");
  }
}

module.exports = RighteousCharge;
