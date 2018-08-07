"use strict";
const Constants = require ("../../../Constants");
const EternalWitnessBase = require("../setCM2/EternalWitness");

class EternalWitness extends EternalWitnessBase {
  constructor (game) {
    super(game, "Eternal Witness", "Fifth Dawn", "5DN");
  }
}

module.exports = EternalWitness;
