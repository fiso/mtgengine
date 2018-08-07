"use strict";
const Constants = require ("../../../Constants");
const StripMineBase = require("../setEXP/StripMine");

class StripMine extends StripMineBase {
  constructor (game) {
    super(game, "Strip Mine", "Pro Tour Collector Set", "PTC");
  }
}

module.exports = StripMine;
