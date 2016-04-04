"use strict";
const Constants = require ("../../../Constants");
const VolcanicFalloutBase = require("../setARC/VolcanicFallout");

class VolcanicFallout extends VolcanicFalloutBase {
  constructor(game) {
    super(game, "Volcanic Fallout", "Conflux", "CON");
  }
}

module.exports = VolcanicFallout;
