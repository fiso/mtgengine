"use strict";
const Constants = require ("../../../Constants");
const WorldBreakerBase = require("../setOGW/WorldBreaker");

class WorldBreaker extends WorldBreakerBase {
  constructor (game) {
    super(game, "World Breaker", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = WorldBreaker;
