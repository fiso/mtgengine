"use strict";
const Constants = require ("../../../Constants");
const PrimalClayBase = require("../setATQ/PrimalClay");

class PrimalClay extends PrimalClayBase {
  constructor (game) {
    super(game, "Primal Clay", "Fifth Edition", "5ED");
  }
}

module.exports = PrimalClay;
