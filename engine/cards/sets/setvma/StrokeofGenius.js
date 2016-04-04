"use strict";
const Constants = require ("../../../Constants");
const StrokeofGeniusBase = require("../setC14/StrokeofGenius");

class StrokeofGenius extends StrokeofGeniusBase {
  constructor(game) {
    super(game, "Stroke of Genius", "Vintage Masters", "VMA");
  }
}

module.exports = StrokeofGenius;
