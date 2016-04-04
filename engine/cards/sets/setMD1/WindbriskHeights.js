"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WindbriskHeightsBase = require("../setV12/WindbriskHeights.js");

class WindbriskHeights extends WindbriskHeightsBase {
  constructor(game) {
    super(game, "Windbrisk Heights", "Modern Event Deck 2014", "MD1");
  }
}

module.exports = WindbriskHeights;
