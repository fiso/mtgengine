"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AzureDrakeBase = require("../setBRB/AzureDrake.js");

class AzureDrake extends AzureDrakeBase {
  constructor(game) {
    super(game, "Azure Drake", "Magic 2011", "M11");
  }
}

module.exports = AzureDrake;
