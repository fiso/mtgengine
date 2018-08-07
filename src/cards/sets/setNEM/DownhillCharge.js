"use strict";
const Constants = require ("../../../Constants");
const DownhillChargeBase = require("../setDDI/DownhillCharge");

class DownhillCharge extends DownhillChargeBase {
  constructor (game) {
    super(game, "Downhill Charge", "Nemesis", "NEM");
  }
}

module.exports = DownhillCharge;
