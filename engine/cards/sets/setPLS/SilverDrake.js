"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SilverDrakeBase = require("../setpMEI/SilverDrake.js");

class SilverDrake extends SilverDrakeBase {
  constructor(game) {
    super(game, "Silver Drake", "Planeshift", "PLS");
  }
}

module.exports = SilverDrake;
