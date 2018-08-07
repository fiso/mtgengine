"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinMutant extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Mutant", "Masters Edition", "MED");
  }
}

module.exports = GoblinMutant;
