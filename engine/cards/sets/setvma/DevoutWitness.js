"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DevoutWitnessBase = require("../setMMQ/DevoutWitness.js");

class DevoutWitness extends DevoutWitnessBase {
  constructor(game) {
    super(game, "Devout Witness", "Vintage Masters", "VMA");
  }
}

module.exports = DevoutWitness;
