"use strict";
const Constants = require ("../../../Constants");
const ThoughtVesselBase = require("../setCM2/ThoughtVessel");

class ThoughtVessel extends ThoughtVesselBase {
  constructor (game) {
    super(game, "Thought Vessel", "Commander Anthology", "CMA");
  }
}

module.exports = ThoughtVessel;
