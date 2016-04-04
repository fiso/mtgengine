"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AzureDrakeBase = require("../setBRB/AzureDrake.js");

class AzureDrake extends AzureDrakeBase {
  constructor(game) {
    super(game, "Azure Drake", "Legends", "LEG");
  }
}

module.exports = AzureDrake;
