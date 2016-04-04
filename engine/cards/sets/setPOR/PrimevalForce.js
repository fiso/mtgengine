"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PrimevalForceBase = require("../set8ED/PrimevalForce.js");

class PrimevalForce extends PrimevalForceBase {
  constructor(game) {
    super(game, "Primeval Force", "Portal", "POR");
  }
}

module.exports = PrimevalForce;
