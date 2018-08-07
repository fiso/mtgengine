"use strict";
const Constants = require ("../../../Constants");
const VigilantDrakeBase = require("../set7ED/VigilantDrake");

class VigilantDrake extends VigilantDrakeBase {
  constructor (game) {
    super(game, "Vigilant Drake", "Urza's Legacy", "ULG");
  }
}

module.exports = VigilantDrake;
