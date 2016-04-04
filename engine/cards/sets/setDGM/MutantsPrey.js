"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MutantsPrey extends Card {
  constructor(game) {
    super(game, "Mutant's Prey", "Dragon's Maze", "DGM");
  }
}

module.exports = MutantsPrey;
