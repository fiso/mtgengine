"use strict";
const Constants = require ("../../../Constants");
const ScatteringStrokeBase = require("../setCMD/ScatteringStroke");

class ScatteringStroke extends ScatteringStrokeBase {
  constructor (game) {
    super(game, "Scattering Stroke", "Lorwyn", "LRW");
  }
}

module.exports = ScatteringStroke;
