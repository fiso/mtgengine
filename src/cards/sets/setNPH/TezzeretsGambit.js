"use strict";
const Constants = require ("../../../Constants");
const TezzeretsGambitBase = require("../setMM2/TezzeretsGambit");

class TezzeretsGambit extends TezzeretsGambitBase {
  constructor (game) {
    super(game, "Tezzeret's Gambit", "New Phyrexia", "NPH");
  }
}

module.exports = TezzeretsGambit;
