"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinMutantBase = require("../setATH/GoblinMutant.js");

class GoblinMutant extends GoblinMutantBase {
  constructor(game) {
    super(game, "Goblin Mutant", "Ice Age", "ICE");
  }
}

module.exports = GoblinMutant;
