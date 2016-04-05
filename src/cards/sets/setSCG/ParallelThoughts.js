"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ParallelThoughts extends UnimplementedCard {
  constructor(game) {
    super(game, "Parallel Thoughts", "Scourge", "SCG");
  }
}

module.exports = ParallelThoughts;
