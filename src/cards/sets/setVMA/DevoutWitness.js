"use strict";
const Constants = require ("../../../Constants");
const DevoutWitnessBase = require("../setMMQ/DevoutWitness");

class DevoutWitness extends DevoutWitnessBase {
  constructor (game) {
    super(game, "Devout Witness", "Vintage Masters", "VMA");
  }
}

module.exports = DevoutWitness;
