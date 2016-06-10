"use strict";
const Constants = require ("../../../Constants");
const BatteryBase = require("../setINV/Battery");

class Battery extends BatteryBase {
  constructor (game) {
    super(game, "Battery", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = Battery;
