"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SnappingDrakeBase = require("../setBTD/SnappingDrake.js");

class SnappingDrake extends SnappingDrakeBase {
  constructor(game) {
    super(game, "Snapping Drake", "Magic 2010", "M10");
  }
}

module.exports = SnappingDrake;
