"use strict";
const Constants = require ("../../../Constants");
const UrborgDrakeBase = require("../setBBD/UrborgDrake");

class UrborgDrake extends UrborgDrakeBase {
  constructor (game) {
    super(game, "Urborg Drake", "Invasion", "INV");
  }
}

module.exports = UrborgDrake;
