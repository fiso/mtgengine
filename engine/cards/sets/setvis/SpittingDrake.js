"use strict";
const Constants = require ("../../../Constants");
const SpittingDrakeBase = require("../set6ED/SpittingDrake");

class SpittingDrake extends SpittingDrakeBase {
  constructor(game) {
    super(game, "Spitting Drake", "Visions", "VIS");
  }
}

module.exports = SpittingDrake;
