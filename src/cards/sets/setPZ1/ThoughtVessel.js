"use strict";
const Constants = require ("../../../Constants");
const ThoughtVesselBase = require("../setCM2/ThoughtVessel");

class ThoughtVessel extends ThoughtVesselBase {
  constructor (game) {
    super(game, "Thought Vessel", "Legendary Cube", "PZ1");
  }
}

module.exports = ThoughtVessel;
