"use strict";
const Constants = require ("../../../Constants");
const ImmolatingGlareBase = require("../setOGW/ImmolatingGlare");

class ImmolatingGlare extends ImmolatingGlareBase {
  constructor (game) {
    super(game, "Immolating Glare", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = ImmolatingGlare;
