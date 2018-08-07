"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GeneticRecombinator extends UnimplementedCard {
  constructor (game) {
    super(game, "Genetic Recombinator", "Unstable", "UST");
  }
}

module.exports = GeneticRecombinator;
