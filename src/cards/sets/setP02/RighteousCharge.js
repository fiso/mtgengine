"use strict";
const Constants = require ("../../../Constants");
const RighteousChargeBase = require("../setGTC/RighteousCharge");

class RighteousCharge extends RighteousChargeBase {
  constructor (game) {
    super(game, "Righteous Charge", "Portal Second Age", "P02");
  }
}

module.exports = RighteousCharge;
