"use strict";
const Constants = require ("../../../Constants");
const PrimevalForceBase = require("../set8ED/PrimevalForce");

class PrimevalForce extends PrimevalForceBase {
  constructor(game) {
    super(game, "Primeval Force", "Portal", "POR");
  }
}

module.exports = PrimevalForce;
