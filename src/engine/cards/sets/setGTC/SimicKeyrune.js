"use strict";
const Constants = require ("../../../Constants");
const SimicKeyruneBase = require("../setC15/SimicKeyrune");

class SimicKeyrune extends SimicKeyruneBase {
  constructor (game) {
    super(game, "Simic Keyrune", "Gatecrash", "GTC");
  }
}

module.exports = SimicKeyrune;
