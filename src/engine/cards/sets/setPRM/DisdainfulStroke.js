"use strict";
const Constants = require ("../../../Constants");
const DisdainfulStrokeBase = require("../setCM2/DisdainfulStroke");

class DisdainfulStroke extends DisdainfulStrokeBase {
  constructor (game) {
    super(game, "Disdainful Stroke", "Magic Online Promos", "PRM");
  }
}

module.exports = DisdainfulStroke;
