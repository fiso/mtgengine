"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Equilibrium extends Card {
  constructor(game) {
    super(game, "Equilibrium", "Exodus", "EXO");
  }
}

module.exports = Equilibrium;
