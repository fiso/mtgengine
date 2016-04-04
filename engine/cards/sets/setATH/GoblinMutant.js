"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinMutant extends Card {
  constructor(game) {
    super(game, "Goblin Mutant", "Anthologies", "ATH");
  }
}

module.exports = GoblinMutant;
