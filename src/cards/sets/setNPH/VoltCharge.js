"use strict";
const Constants = require ("../../../Constants");
const VoltChargeBase = require("../setDDL/VoltCharge");

class VoltCharge extends VoltChargeBase {
  constructor(game) {
    super(game, "Volt Charge", "New Phyrexia", "NPH");
  }
}

module.exports = VoltCharge;
