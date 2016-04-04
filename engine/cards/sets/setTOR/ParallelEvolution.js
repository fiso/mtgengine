"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ParallelEvolution extends UnimplementedCard {
  constructor(game) {
    super(game, "Parallel Evolution", "Torment", "TOR");
  }
}

module.exports = ParallelEvolution;
