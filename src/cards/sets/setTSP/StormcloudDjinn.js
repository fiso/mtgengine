"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StormcloudDjinn extends UnimplementedCard {
  constructor(game) {
    super(game, "Stormcloud Djinn", "Time Spiral", "TSP");
  }
}

module.exports = StormcloudDjinn;
