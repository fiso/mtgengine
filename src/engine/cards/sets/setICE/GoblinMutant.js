"use strict";
const Constants = require ("../../../Constants");
const GoblinMutantBase = require("../setMED/GoblinMutant");

class GoblinMutant extends GoblinMutantBase {
  constructor (game) {
    super(game, "Goblin Mutant", "Ice Age", "ICE");
  }
}

module.exports = GoblinMutant;
