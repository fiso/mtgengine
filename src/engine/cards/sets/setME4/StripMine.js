"use strict";
const Constants = require ("../../../Constants");
const StripMineBase = require("../setEXP/StripMine");

class StripMine extends StripMineBase {
  constructor (game) {
    super(game, "Strip Mine", "Masters Edition IV", "ME4");
  }
}

module.exports = StripMine;
