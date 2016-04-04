"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SymbioticWurm extends Card {
  constructor(game) {
    super(game, "Symbiotic Wurm", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = SymbioticWurm;
