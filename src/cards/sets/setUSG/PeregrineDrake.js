"use strict";
const Constants = require ("../../../Constants");
const PeregrineDrakeBase = require("../setBBD/PeregrineDrake");

class PeregrineDrake extends PeregrineDrakeBase {
  constructor (game) {
    super(game, "Peregrine Drake", "Urza's Saga", "USG");
  }
}

module.exports = PeregrineDrake;
