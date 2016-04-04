"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VoltChargeBase = require("../setDDL/VoltCharge.js");

class VoltCharge extends VoltChargeBase {
  constructor(game) {
    super(game, "Volt Charge", "New Phyrexia", "NPH");
  }
}

module.exports = VoltCharge;
