"use strict";
const Constants = require ("../../../Constants");
const EternalWitnessBase = require("../setC15/EternalWitness");

class EternalWitness extends EternalWitnessBase {
  constructor (game) {
    super(game, "Eternal Witness", "Modern Masters", "MMA");
  }
}

module.exports = EternalWitness;
