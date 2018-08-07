"use strict";
const Constants = require ("../../../Constants");
const SilverDrakeBase = require("../setPLS/SilverDrake");

class SilverDrake extends SilverDrakeBase {
  constructor (game) {
    super(game, "Silver Drake", "Magazine Inserts", "PMEI");
  }
}

module.exports = SilverDrake;
