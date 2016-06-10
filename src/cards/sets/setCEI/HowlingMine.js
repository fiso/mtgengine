"use strict";
const Constants = require ("../../../Constants");
const HowlingMineBase = require("../set6ED/HowlingMine");

class HowlingMine extends HowlingMineBase {
  constructor (game) {
    super(game, "Howling Mine", "International Collector's Edition", "CEI");
  }
}

module.exports = HowlingMine;
