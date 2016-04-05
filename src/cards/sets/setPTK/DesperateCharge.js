"use strict";
const Constants = require ("../../../Constants");
const DesperateChargeBase = require("../setME3/DesperateCharge");

class DesperateCharge extends DesperateChargeBase {
  constructor(game) {
    super(game, "Desperate Charge", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = DesperateCharge;
