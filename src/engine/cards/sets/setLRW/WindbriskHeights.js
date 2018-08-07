"use strict";
const Constants = require ("../../../Constants");
const WindbriskHeightsBase = require("../setC16/WindbriskHeights");

class WindbriskHeights extends WindbriskHeightsBase {
  constructor (game) {
    super(game, "Windbrisk Heights", "Lorwyn", "LRW");
  }
}

module.exports = WindbriskHeights;
