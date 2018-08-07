"use strict";
const Constants = require ("../../../Constants");
const PainSufferingBase = require("../setDDH/PainSuffering");

class PainSuffering extends PainSufferingBase {
  constructor (game) {
    super(game, "Pain // Suffering", "Invasion", "INV");
  }
}

module.exports = PainSuffering;
