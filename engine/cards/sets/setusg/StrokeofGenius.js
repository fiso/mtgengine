"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StrokeofGeniusBase = require("../setC14/StrokeofGenius.js");

class StrokeofGenius extends StrokeofGeniusBase {
  constructor(game) {
    super(game, "Stroke of Genius", "Urza's Saga", "USG");
  }
}

module.exports = StrokeofGenius;
