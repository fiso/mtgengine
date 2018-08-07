"use strict";
const Constants = require ("../../../Constants");
const StrokeofGeniusBase = require("../setC15/StrokeofGenius");

class StrokeofGenius extends StrokeofGeniusBase {
  constructor (game) {
    super(game, "Stroke of Genius", "Urza's Saga", "USG");
  }
}

module.exports = StrokeofGenius;
