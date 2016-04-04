"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpittingDrakeBase = require("../set6ED/SpittingDrake.js");

class SpittingDrake extends SpittingDrakeBase {
  constructor(game) {
    super(game, "Spitting Drake", "Visions", "VIS");
  }
}

module.exports = SpittingDrake;
