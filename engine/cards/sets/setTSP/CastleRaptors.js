"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CastleRaptors extends Card {
  constructor(game) {
    super(game, "Castle Raptors", "Time Spiral", "TSP");
  }
}

module.exports = CastleRaptors;
