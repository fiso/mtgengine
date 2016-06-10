"use strict";
const Constants = require ("../../../Constants");
const RighteousChargeBase = require("../setGTC/RighteousCharge");

class RighteousCharge extends RighteousChargeBase {
  constructor (game) {
    super(game, "Righteous Charge", "Portal Second Age", "PO2");
  }
}

module.exports = RighteousCharge;
