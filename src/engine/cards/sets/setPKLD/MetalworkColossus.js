"use strict";
const Constants = require ("../../../Constants");
const MetalworkColossusBase = require("../setKLD/MetalworkColossus");

class MetalworkColossus extends MetalworkColossusBase {
  constructor (game) {
    super(game, "Metalwork Colossus", "Kaladesh Promos", "PKLD");
  }
}

module.exports = MetalworkColossus;
