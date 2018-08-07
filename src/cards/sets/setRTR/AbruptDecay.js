"use strict";
const Constants = require ("../../../Constants");
const AbruptDecayBase = require("../setMM3/AbruptDecay");

class AbruptDecay extends AbruptDecayBase {
  constructor (game) {
    super(game, "Abrupt Decay", "Return to Ravnica", "RTR");
  }
}

module.exports = AbruptDecay;
