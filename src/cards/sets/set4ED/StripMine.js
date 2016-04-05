"use strict";
const Constants = require ("../../../Constants");
const StripMineBase = require("../setATH/StripMine");

class StripMine extends StripMineBase {
  constructor(game) {
    super(game, "Strip Mine", "Fourth Edition", "4ED");
  }
}

module.exports = StripMine;
