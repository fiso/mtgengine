"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TemporalEddy extends UnimplementedCard {
  constructor (game) {
    super(game, "Temporal Eddy", "Time Spiral", "TSP");
  }
}

module.exports = TemporalEddy;
