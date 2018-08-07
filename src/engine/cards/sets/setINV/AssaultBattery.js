"use strict";
const Constants = require ("../../../Constants");
const AssaultBatteryBase = require("../setHOP/AssaultBattery");

class AssaultBattery extends AssaultBatteryBase {
  constructor (game) {
    super(game, "Assault // Battery", "Invasion", "INV");
  }
}

module.exports = AssaultBattery;
