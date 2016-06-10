"use strict";
const Constants = require ("../../../Constants");
const InspiredChargeBase = require("../setBFZ/InspiredCharge");

class InspiredCharge extends InspiredChargeBase {
  constructor (game) {
    super(game, "Inspired Charge", "Magic 2015 Core Set", "M15");
  }
}

module.exports = InspiredCharge;
