"use strict";
const Constants = require ("../../../Constants");
const AdmiralBeckettBrassBase = require("../setXLN/AdmiralBeckettBrass");

class AdmiralBeckettBrass extends AdmiralBeckettBrassBase {
  constructor (game) {
    super(game, "Admiral Beckett Brass", "Ixalan Promos", "PXLN");
  }
}

module.exports = AdmiralBeckettBrass;
