"use strict";
const Constants = require ("../../../Constants");
const ConclavePhalanxBase = require("../setMM2/ConclavePhalanx");

class ConclavePhalanx extends ConclavePhalanxBase {
  constructor (game) {
    super(game, "Conclave Phalanx", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = ConclavePhalanx;
