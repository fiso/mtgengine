"use strict";
const Constants = require ("../../../Constants");
const PrimevalShamblerBase = require("../set8ED/PrimevalShambler");

class PrimevalShambler extends PrimevalShamblerBase {
  constructor(game) {
    super(game, "Primeval Shambler", "Mercadian Masques", "MMQ");
  }
}

module.exports = PrimevalShambler;
