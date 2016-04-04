"use strict";
const Constants = require ("../../../Constants");
const VolcanicFalloutBase = require("../setARC/VolcanicFallout");

class VolcanicFallout extends VolcanicFalloutBase {
  constructor(game) {
    super(game, "Volcanic Fallout", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = VolcanicFallout;
