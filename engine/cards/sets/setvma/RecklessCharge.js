"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RecklessChargeBase = require("../setODY/RecklessCharge.js");

class RecklessCharge extends RecklessChargeBase {
  constructor(game) {
    super(game, "Reckless Charge", "Vintage Masters", "VMA");
  }
}

module.exports = RecklessCharge;
