"use strict";
const Constants = require ("../../../Constants");
const CoalStokerBase = require("../setDDK/CoalStoker");

class CoalStoker extends CoalStokerBase {
  constructor(game) {
    super(game, "Coal Stoker", "Time Spiral", "TSP");
  }
}

module.exports = CoalStoker;
