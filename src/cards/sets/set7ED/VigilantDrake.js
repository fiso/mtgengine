"use strict";
const Constants = require ("../../../Constants");
const VigilantDrakeBase = require("../setBTD/VigilantDrake");

class VigilantDrake extends VigilantDrakeBase {
  constructor (game) {
    super(game, "Vigilant Drake", "Seventh Edition", "7ED");
  }
}

module.exports = VigilantDrake;
