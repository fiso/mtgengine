"use strict";
const Constants = require ("../../../Constants");
const SolkanartheSwampKingBase = require("../setTSB/SolkanartheSwampKing");

class SolkanartheSwampKing extends SolkanartheSwampKingBase {
  constructor (game) {
    super(game, "Sol'kanar the Swamp King", "Legends", "LEG");
  }
}

module.exports = SolkanartheSwampKing;
