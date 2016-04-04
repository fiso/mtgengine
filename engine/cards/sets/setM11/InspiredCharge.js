"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InspiredChargeBase = require("../setBFZ/InspiredCharge.js");

class InspiredCharge extends InspiredChargeBase {
  constructor(game) {
    super(game, "Inspired Charge", "Magic 2011", "M11");
  }
}

module.exports = InspiredCharge;
