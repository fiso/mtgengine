"use strict";
const Constants = require ("../../../Constants");
const AssembledAlphasBase = require("../setEMN/AssembledAlphas");

class AssembledAlphas extends AssembledAlphasBase {
  constructor (game) {
    super(game, "Assembled Alphas", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = AssembledAlphas;
