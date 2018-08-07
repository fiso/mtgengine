"use strict";
const Constants = require ("../../../Constants");
const DevoutWitnessBase = require("../setVMA/DevoutWitness");

class DevoutWitness extends DevoutWitnessBase {
  constructor (game) {
    super(game, "Devout Witness", "Mercadian Masques", "MMQ");
  }
}

module.exports = DevoutWitness;
