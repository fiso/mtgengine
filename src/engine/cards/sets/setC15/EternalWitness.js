"use strict";
const Constants = require ("../../../Constants");
const EternalWitnessBase = require("../setCM2/EternalWitness");

class EternalWitness extends EternalWitnessBase {
  constructor (game) {
    super(game, "Eternal Witness", "Commander 2015", "C15");
  }
}

module.exports = EternalWitness;
