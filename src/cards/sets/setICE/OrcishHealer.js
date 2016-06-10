"use strict";
const Constants = require ("../../../Constants");
const OrcishHealerBase = require("../setCST/OrcishHealer");

class OrcishHealer extends OrcishHealerBase {
  constructor (game) {
    super(game, "Orcish Healer", "Ice Age", "ICE");
  }
}

module.exports = OrcishHealer;
