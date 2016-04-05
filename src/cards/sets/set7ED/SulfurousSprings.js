"use strict";
const Constants = require ("../../../Constants");
const SulfurousSpringsBase = require("../set6ED/SulfurousSprings");

class SulfurousSprings extends SulfurousSpringsBase {
  constructor(game) {
    super(game, "Sulfurous Springs", "Seventh Edition", "7ED");
  }
}

module.exports = SulfurousSprings;
