"use strict";
const Constants = require ("../../../Constants");
const DisdainfulStrokeBase = require("../setCM2/DisdainfulStroke");

class DisdainfulStroke extends DisdainfulStrokeBase {
  constructor (game) {
    super(game, "Disdainful Stroke", "Friday Night Magic 2015", "F15");
  }
}

module.exports = DisdainfulStroke;
