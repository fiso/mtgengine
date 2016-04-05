"use strict";
const Constants = require ("../../../Constants");
const PithingNeedleBase = require("../setM10/PithingNeedle");

class PithingNeedle extends PithingNeedleBase {
  constructor(game) {
    super(game, "Pithing Needle", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = PithingNeedle;
