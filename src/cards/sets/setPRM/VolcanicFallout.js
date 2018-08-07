"use strict";
const Constants = require ("../../../Constants");
const VolcanicFalloutBase = require("../setCNS/VolcanicFallout");

class VolcanicFallout extends VolcanicFalloutBase {
  constructor (game) {
    super(game, "Volcanic Fallout", "Magic Online Promos", "PRM");
  }
}

module.exports = VolcanicFallout;
