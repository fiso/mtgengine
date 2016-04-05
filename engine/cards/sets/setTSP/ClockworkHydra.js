"use strict";
const Constants = require ("../../../Constants");
const ClockworkHydraBase = require("../setDDF/ClockworkHydra");

class ClockworkHydra extends ClockworkHydraBase {
  constructor(game) {
    super(game, "Clockwork Hydra", "Time Spiral", "TSP");
  }
}

module.exports = ClockworkHydra;
