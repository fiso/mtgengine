"use strict";
const Constants = require ("../../../Constants");
const SnappingDrakeBase = require("../setM19/SnappingDrake");

class SnappingDrake extends SnappingDrakeBase {
  constructor (game) {
    super(game, "Snapping Drake", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = SnappingDrake;
