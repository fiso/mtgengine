"use strict";
const Constants = require ("../../../Constants");
const StrokeofGeniusBase = require("../setC15/StrokeofGenius");

class StrokeofGenius extends StrokeofGeniusBase {
  constructor (game) {
    super(game, "Stroke of Genius", "Magic Online Promos", "PRM");
  }
}

module.exports = StrokeofGenius;
