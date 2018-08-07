"use strict";
const Constants = require ("../../../Constants");
const VolcanicFalloutBase = require("../setCNS/VolcanicFallout");

class VolcanicFallout extends VolcanicFalloutBase {
  constructor (game) {
    super(game, "Volcanic Fallout", "Magic Player Rewards 2010", "P10");
  }
}

module.exports = VolcanicFallout;
