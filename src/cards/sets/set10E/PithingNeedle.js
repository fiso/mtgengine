"use strict";
const Constants = require ("../../../Constants");
const PithingNeedleBase = require("../setMPS/PithingNeedle");

class PithingNeedle extends PithingNeedleBase {
  constructor (game) {
    super(game, "Pithing Needle", "Tenth Edition", "10E");
  }
}

module.exports = PithingNeedle;
