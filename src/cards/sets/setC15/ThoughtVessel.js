"use strict";
const Constants = require ("../../../Constants");
const ThoughtVesselBase = require("../setCM2/ThoughtVessel");

class ThoughtVessel extends ThoughtVesselBase {
  constructor (game) {
    super(game, "Thought Vessel", "Commander 2015", "C15");
  }
}

module.exports = ThoughtVessel;
