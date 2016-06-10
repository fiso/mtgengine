"use strict";
const Constants = require ("../../../Constants");
const AzureDrakeBase = require("../setBRB/AzureDrake");

class AzureDrake extends AzureDrakeBase {
  constructor (game) {
    super(game, "Azure Drake", "Magic 2011", "M11");
  }
}

module.exports = AzureDrake;
