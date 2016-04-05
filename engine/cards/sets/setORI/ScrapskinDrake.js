"use strict";
const Constants = require ("../../../Constants");
const ScrapskinDrakeBase = require("../setAVR/ScrapskinDrake");

class ScrapskinDrake extends ScrapskinDrakeBase {
  constructor(game) {
    super(game, "Scrapskin Drake", "Magic Origins", "ORI");
  }
}

module.exports = ScrapskinDrake;
