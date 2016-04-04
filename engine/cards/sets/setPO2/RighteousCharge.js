"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RighteousChargeBase = require("../setGTC/RighteousCharge.js");

class RighteousCharge extends RighteousChargeBase {
  constructor(game) {
    super(game, "Righteous Charge", "Portal Second Age", "PO2");
  }
}

module.exports = RighteousCharge;
