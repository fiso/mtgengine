"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LocketofYesterdays extends Card {
  constructor(game) {
    super(game, "Locket of Yesterdays", "Time Spiral", "TSP");
  }
}

module.exports = LocketofYesterdays;
