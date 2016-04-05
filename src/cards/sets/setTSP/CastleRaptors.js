"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CastleRaptors extends UnimplementedCard {
  constructor(game) {
    super(game, "Castle Raptors", "Time Spiral", "TSP");
  }
}

module.exports = CastleRaptors;
