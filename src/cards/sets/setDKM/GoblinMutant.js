"use strict";
const Constants = require ("../../../Constants");
const GoblinMutantBase = require("../setATH/GoblinMutant");

class GoblinMutant extends GoblinMutantBase {
  constructor(game) {
    super(game, "Goblin Mutant", "Deckmasters", "DKM");
  }
}

module.exports = GoblinMutant;
