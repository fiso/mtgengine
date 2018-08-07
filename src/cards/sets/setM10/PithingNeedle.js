"use strict";
const Constants = require ("../../../Constants");
const PithingNeedleBase = require("../setMPS/PithingNeedle");

class PithingNeedle extends PithingNeedleBase {
  constructor (game) {
    super(game, "Pithing Needle", "Magic 2010", "M10");
  }
}

module.exports = PithingNeedle;
