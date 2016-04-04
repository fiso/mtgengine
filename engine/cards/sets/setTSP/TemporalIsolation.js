"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TemporalIsolation extends UnimplementedCard {
  constructor(game) {
    super(game, "Temporal Isolation", "Time Spiral", "TSP");
  }
}

module.exports = TemporalIsolation;
