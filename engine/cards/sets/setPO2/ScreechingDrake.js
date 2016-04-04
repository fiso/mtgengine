"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScreechingDrakeBase = require("../setME2/ScreechingDrake.js");

class ScreechingDrake extends ScreechingDrakeBase {
  constructor(game) {
    super(game, "Screeching Drake", "Portal Second Age", "PO2");
  }
}

module.exports = ScreechingDrake;
