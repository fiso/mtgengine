"use strict";
const Constants = require ("../../../Constants");
const AzureDrakeBase = require("../setM11/AzureDrake");

class AzureDrake extends AzureDrakeBase {
  constructor (game) {
    super(game, "Azure Drake", "Fifth Edition", "5ED");
  }
}

module.exports = AzureDrake;
