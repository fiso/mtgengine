"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DesperateChargeBase = require("../setME3/DesperateCharge.js");

class DesperateCharge extends DesperateChargeBase {
  constructor(game) {
    super(game, "Desperate Charge", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = DesperateCharge;
