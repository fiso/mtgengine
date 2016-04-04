"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StitchedDrakeBase = require("../setDDQ/StitchedDrake.js");

class StitchedDrake extends StitchedDrakeBase {
  constructor(game) {
    super(game, "Stitched Drake", "Innistrad", "ISD");
  }
}

module.exports = StitchedDrake;
