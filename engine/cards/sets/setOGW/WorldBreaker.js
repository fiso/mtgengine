"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WorldBreaker extends UnimplementedCard {
  constructor(game) {
    super(game, "World Breaker", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = WorldBreaker;
