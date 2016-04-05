"use strict";
const Constants = require ("../../../Constants");
const PrimalClayBase = require("../setATQ/PrimalClay");

class PrimalClay extends PrimalClayBase {
  constructor(game) {
    super(game, "Primal Clay", "Masters Edition IV", "ME4");
  }
}

module.exports = PrimalClay;
