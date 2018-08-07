"use strict";
const Constants = require ("../../../Constants");
const InspiredChargeBase = require("../setM19/InspiredCharge");

class InspiredCharge extends InspiredChargeBase {
  constructor (game) {
    super(game, "Inspired Charge", "Magic 2015", "M15");
  }
}

module.exports = InspiredCharge;
