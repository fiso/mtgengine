"use strict";
const Constants = require ("../../../Constants");
const VolcanicFalloutBase = require("../setARC/VolcanicFallout");

class VolcanicFallout extends VolcanicFalloutBase {
  constructor (game) {
    super(game, "Volcanic Fallout", "Magic Player Rewards", "pMPR");
  }
}

module.exports = VolcanicFallout;
