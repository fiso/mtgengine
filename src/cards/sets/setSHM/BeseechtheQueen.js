"use strict";
const Constants = require ("../../../Constants");
const BeseechtheQueenBase = require("../setHOP/BeseechtheQueen");

class BeseechtheQueen extends BeseechtheQueenBase {
  constructor (game) {
    super(game, "Beseech the Queen", "Shadowmoor", "SHM");
  }
}

module.exports = BeseechtheQueen;
