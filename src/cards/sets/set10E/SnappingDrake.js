"use strict";
const Constants = require ("../../../Constants");
const SnappingDrakeBase = require("../setBTD/SnappingDrake");

class SnappingDrake extends SnappingDrakeBase {
  constructor (game) {
    super(game, "Snapping Drake", "Tenth Edition", "10E");
  }
}

module.exports = SnappingDrake;
