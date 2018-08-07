"use strict";
const Constants = require ("../../../Constants");
const BeseechtheQueenBase = require("../setV16/BeseechtheQueen");

class BeseechtheQueen extends BeseechtheQueenBase {
  constructor (game) {
    super(game, "Beseech the Queen", "Planechase", "HOP");
  }
}

module.exports = BeseechtheQueen;
