"use strict";
const Constants = require ("../../../Constants");
const KindredChargeBase = require("../setC17/KindredCharge");

class KindredCharge extends KindredChargeBase {
  constructor (game) {
    super(game, "Kindred Charge", "You Make the Cube", "PZ2");
  }
}

module.exports = KindredCharge;
