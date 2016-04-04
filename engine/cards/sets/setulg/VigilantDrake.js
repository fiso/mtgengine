"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VigilantDrakeBase = require("../setBTD/VigilantDrake.js");

class VigilantDrake extends VigilantDrakeBase {
  constructor(game) {
    super(game, "Vigilant Drake", "Urza's Legacy", "ULG");
  }
}

module.exports = VigilantDrake;
