"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ClockworkHydraBase = require("../setDDF/ClockworkHydra.js");

class ClockworkHydra extends ClockworkHydraBase {
  constructor(game) {
    super(game, "Clockwork Hydra", "Time Spiral", "TSP");
  }
}

module.exports = ClockworkHydra;
