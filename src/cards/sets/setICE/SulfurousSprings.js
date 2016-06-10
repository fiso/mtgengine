"use strict";
const Constants = require ("../../../Constants");
const SulfurousSpringsBase = require("../set6ED/SulfurousSprings");

class SulfurousSprings extends SulfurousSpringsBase {
  constructor (game) {
    super(game, "Sulfurous Springs", "Ice Age", "ICE");
  }
}

module.exports = SulfurousSprings;
