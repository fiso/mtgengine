"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SimicKeyruneBase = require("../setC15/SimicKeyrune.js");

class SimicKeyrune extends SimicKeyruneBase {
  constructor(game) {
    super(game, "Simic Keyrune", "Gatecrash", "GTC");
  }
}

module.exports = SimicKeyrune;
