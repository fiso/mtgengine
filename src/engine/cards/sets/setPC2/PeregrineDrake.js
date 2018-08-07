"use strict";
const Constants = require ("../../../Constants");
const PeregrineDrakeBase = require("../setBBD/PeregrineDrake");

class PeregrineDrake extends PeregrineDrakeBase {
  constructor (game) {
    super(game, "Peregrine Drake", "Planechase 2012", "PC2");
  }
}

module.exports = PeregrineDrake;
