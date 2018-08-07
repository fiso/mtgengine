"use strict";
const Constants = require ("../../../Constants");
const EvraHalcyonWitnessBase = require("../setDOM/EvraHalcyonWitness");

class EvraHalcyonWitness extends EvraHalcyonWitnessBase {
  constructor (game) {
    super(game, "Evra, Halcyon Witness", "Dominaria Promos", "PDOM");
  }
}

module.exports = EvraHalcyonWitness;
