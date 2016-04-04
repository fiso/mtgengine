"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WindbriskHeightsBase = require("../setV12/WindbriskHeights.js");

class WindbriskHeights extends WindbriskHeightsBase {
  constructor(game) {
    super(game, "Windbrisk Heights", "Lorwyn", "LRW");
  }
}

module.exports = WindbriskHeights;
