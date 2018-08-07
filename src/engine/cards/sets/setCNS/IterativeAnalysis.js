"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IterativeAnalysis extends UnimplementedCard {
  constructor (game) {
    super(game, "Iterative Analysis", "Conspiracy", "CNS");
  }
}

module.exports = IterativeAnalysis;
