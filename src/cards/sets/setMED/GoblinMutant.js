"use strict";
const Constants = require ("../../../Constants");
const GoblinMutantBase = require("../setATH/GoblinMutant");

class GoblinMutant extends GoblinMutantBase {
  constructor (game) {
    super(game, "Goblin Mutant", "Masters Edition", "MED");
  }
}

module.exports = GoblinMutant;
