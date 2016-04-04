"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ParallelEvolution extends Card {
  constructor(game) {
    super(game, "Parallel Evolution", "Torment", "TOR");
  }
}

module.exports = ParallelEvolution;
