"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScatteringStrokeBase = require("../setLRW/ScatteringStroke.js");

class ScatteringStroke extends ScatteringStrokeBase {
  constructor(game) {
    super(game, "Scattering Stroke", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = ScatteringStroke;
