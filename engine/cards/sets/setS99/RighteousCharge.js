"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RighteousChargeBase = require("../setGTC/RighteousCharge.js");

class RighteousCharge extends RighteousChargeBase {
  constructor(game) {
    super(game, "Righteous Charge", "Starter 1999", "S99");
  }
}

module.exports = RighteousCharge;
