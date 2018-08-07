"use strict";
const Constants = require ("../../../Constants");
const TezzeretsGambitBase = require("../setCM2/TezzeretsGambit");

class TezzeretsGambit extends TezzeretsGambitBase {
  constructor (game) {
    super(game, "Tezzeret's Gambit", "Modern Masters 2015", "MM2");
  }
}

module.exports = TezzeretsGambit;
