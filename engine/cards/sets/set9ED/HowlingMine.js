"use strict";
const Constants = require ("../../../Constants");
const HowlingMineBase = require("../set6ED/HowlingMine");

class HowlingMine extends HowlingMineBase {
  constructor(game) {
    super(game, "Howling Mine", "Ninth Edition", "9ED");
  }
}

module.exports = HowlingMine;
