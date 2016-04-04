"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RighteousChargeBase = require("../setGTC/RighteousCharge.js");

class RighteousCharge extends RighteousChargeBase {
  constructor(game) {
    super(game, "Righteous Charge", "Masters Edition IV", "ME4");
  }
}

module.exports = RighteousCharge;
