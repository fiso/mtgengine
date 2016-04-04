"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TemporalIsolation extends Card {
  constructor(game) {
    super(game, "Temporal Isolation", "Time Spiral", "TSP");
  }
}

module.exports = TemporalIsolation;
