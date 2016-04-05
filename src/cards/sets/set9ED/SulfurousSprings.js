"use strict";
const Constants = require ("../../../Constants");
const SulfurousSpringsBase = require("../set6ED/SulfurousSprings");

class SulfurousSprings extends SulfurousSpringsBase {
  constructor(game) {
    super(game, "Sulfurous Springs", "Ninth Edition", "9ED");
  }
}

module.exports = SulfurousSprings;
