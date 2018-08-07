"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OpticalOptimizer extends UnimplementedCard {
  constructor (game) {
    super(game, "Optical Optimizer", "Unstable", "UST");
  }
}

module.exports = OpticalOptimizer;
