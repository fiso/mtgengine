"use strict";
const Constants = require ("../../../Constants");
const HowlingMineBase = require("../set6ED/HowlingMine");

class HowlingMine extends HowlingMineBase {
  constructor(game) {
    super(game, "Howling Mine", "Seventh Edition", "7ED");
  }
}

module.exports = HowlingMine;
