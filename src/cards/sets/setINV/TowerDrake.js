"use strict";
const Constants = require ("../../../Constants");
const TowerDrakeBase = require("../setRTR/TowerDrake");

class TowerDrake extends TowerDrakeBase {
  constructor (game) {
    super(game, "Tower Drake", "Invasion", "INV");
  }
}

module.exports = TowerDrake;
