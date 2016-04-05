"use strict";
const Constants = require ("../../../Constants");
const PithingNeedleBase = require("../setM10/PithingNeedle");

class PithingNeedle extends PithingNeedleBase {
  constructor(game) {
    super(game, "Pithing Needle", "Return to Ravnica", "RTR");
  }
}

module.exports = PithingNeedle;
