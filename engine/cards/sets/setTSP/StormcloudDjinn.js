"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StormcloudDjinn extends Card {
  constructor(game) {
    super(game, "Stormcloud Djinn", "Time Spiral", "TSP");
  }
}

module.exports = StormcloudDjinn;
