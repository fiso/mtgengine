"use strict";
const Constants = require ("../../../Constants");
const HowlingMineBase = require("../setC16/HowlingMine");

class HowlingMine extends HowlingMineBase {
  constructor (game) {
    super(game, "Howling Mine", "Fourth Edition", "4ED");
  }
}

module.exports = HowlingMine;
