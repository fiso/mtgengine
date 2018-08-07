"use strict";
const Constants = require ("../../../Constants");
const StitchedDrakeBase = require("../setDDQ/StitchedDrake");

class StitchedDrake extends StitchedDrakeBase {
  constructor (game) {
    super(game, "Stitched Drake", "Innistrad", "ISD");
  }
}

module.exports = StitchedDrake;
