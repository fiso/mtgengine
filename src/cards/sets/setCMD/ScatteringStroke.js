"use strict";
const Constants = require ("../../../Constants");
const ScatteringStrokeBase = require("../setLRW/ScatteringStroke");

class ScatteringStroke extends ScatteringStrokeBase {
  constructor (game) {
    super(game, "Scattering Stroke", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = ScatteringStroke;
