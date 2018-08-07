"use strict";
const Constants = require ("../../../Constants");
const AssaultBatteryBase = require("../setHOP/AssaultBattery");

class AssaultBattery extends AssaultBatteryBase {
  constructor (game) {
    super(game, "Assault // Battery", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = AssaultBattery;
