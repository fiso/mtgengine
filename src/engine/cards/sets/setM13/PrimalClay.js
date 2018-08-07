"use strict";
const Constants = require ("../../../Constants");
const PrimalClayBase = require("../setA25/PrimalClay");

class PrimalClay extends PrimalClayBase {
  constructor (game) {
    super(game, "Primal Clay", "Magic 2013", "M13");
  }
}

module.exports = PrimalClay;
