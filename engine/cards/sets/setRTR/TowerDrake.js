"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TowerDrakeBase = require("../setINV/TowerDrake.js");

class TowerDrake extends TowerDrakeBase {
  constructor(game) {
    super(game, "Tower Drake", "Return to Ravnica", "RTR");
  }
}

module.exports = TowerDrake;
