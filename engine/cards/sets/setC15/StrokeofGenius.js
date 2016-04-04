"use strict";
const Constants = require ("../../../Constants");
const StrokeofGeniusBase = require("../setC14/StrokeofGenius");

class StrokeofGenius extends StrokeofGeniusBase {
  constructor(game) {
    super(game, "Stroke of Genius", "Commander 2015", "C15");
  }
}

module.exports = StrokeofGenius;
