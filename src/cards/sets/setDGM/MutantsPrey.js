"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MutantsPrey extends UnimplementedCard {
  constructor (game) {
    super(game, "Mutant's Prey", "Dragon's Maze", "DGM");
  }
}

module.exports = MutantsPrey;
