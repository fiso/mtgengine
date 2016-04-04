"use strict";
const Constants = require ("../../../Constants");
const EternalWitnessBase = require("../setC15/EternalWitness");

class EternalWitness extends EternalWitnessBase {
  constructor(game) {
    super(game, "Eternal Witness", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = EternalWitness;
