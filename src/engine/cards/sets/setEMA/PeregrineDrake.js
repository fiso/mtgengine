"use strict";
const Constants = require ("../../../Constants");
const PeregrineDrakeBase = require("../setBBD/PeregrineDrake");

class PeregrineDrake extends PeregrineDrakeBase {
  constructor (game) {
    super(game, "Peregrine Drake", "Eternal Masters", "EMA");
  }
}

module.exports = PeregrineDrake;
