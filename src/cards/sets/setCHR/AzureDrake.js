"use strict";
const Constants = require ("../../../Constants");
const AzureDrakeBase = require("../setBRB/AzureDrake");

class AzureDrake extends AzureDrakeBase {
  constructor (game) {
    super(game, "Azure Drake", "Chronicles", "CHR");
  }
}

module.exports = AzureDrake;
