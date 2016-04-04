"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TemporalEddy extends Card {
  constructor(game) {
    super(game, "Temporal Eddy", "Time Spiral", "TSP");
  }
}

module.exports = TemporalEddy;
