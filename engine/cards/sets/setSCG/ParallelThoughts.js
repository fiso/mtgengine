"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ParallelThoughts extends Card {
  constructor(game) {
    super(game, "Parallel Thoughts", "Scourge", "SCG");
  }
}

module.exports = ParallelThoughts;
