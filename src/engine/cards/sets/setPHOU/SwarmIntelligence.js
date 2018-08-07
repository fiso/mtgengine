"use strict";
const Constants = require ("../../../Constants");
const SwarmIntelligenceBase = require("../setHOU/SwarmIntelligence");

class SwarmIntelligence extends SwarmIntelligenceBase {
  constructor (game) {
    super(game, "Swarm Intelligence", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = SwarmIntelligence;
