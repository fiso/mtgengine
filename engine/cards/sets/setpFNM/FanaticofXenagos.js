"use strict";
const Constants = require ("../../../Constants");
const FanaticofXenagosBase = require("../setBNG/FanaticofXenagos");

class FanaticofXenagos extends FanaticofXenagosBase {
  constructor(game) {
    super(game, "Fanatic of Xenagos", "Friday Night Magic", "pFNM");
  }
}

module.exports = FanaticofXenagos;
