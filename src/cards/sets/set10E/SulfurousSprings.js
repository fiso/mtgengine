"use strict";
const Constants = require ("../../../Constants");
const SulfurousSpringsBase = require("../set6ED/SulfurousSprings");

class SulfurousSprings extends SulfurousSpringsBase {
  constructor (game) {
    super(game, "Sulfurous Springs", "Tenth Edition", "10E");
  }
}

module.exports = SulfurousSprings;
