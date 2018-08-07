"use strict";
const Constants = require ("../../../Constants");
const PrimalClayBase = require("../setA25/PrimalClay");

class PrimalClay extends PrimalClayBase {
  constructor (game) {
    super(game, "Primal Clay", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = PrimalClay;
