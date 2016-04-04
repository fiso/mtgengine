"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EternalWitness extends Card {
  constructor(game) {
    super(game, "Eternal Witness", "Commander 2015", "C15");
  }
}

module.exports = EternalWitness;
