"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EternalWitnessBase = require("../setC15/EternalWitness.js");

class EternalWitness extends EternalWitnessBase {
  constructor(game) {
    super(game, "Eternal Witness", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = EternalWitness;
