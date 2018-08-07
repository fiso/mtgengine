"use strict";
const Constants = require ("../../../Constants");
const HowlingMineBase = require("../setC16/HowlingMine");

class HowlingMine extends HowlingMineBase {
  constructor (game) {
    super(game, "Howling Mine", "Limited Edition Beta", "LEB");
  }
}

module.exports = HowlingMine;
