"use strict";
const Constants = require ("../../../Constants");
const TowerDrakeBase = require("../setINV/TowerDrake");

class TowerDrake extends TowerDrakeBase {
  constructor (game) {
    super(game, "Tower Drake", "Return to Ravnica", "RTR");
  }
}

module.exports = TowerDrake;
