"use strict";
const Constants = require ("../../../Constants");
const PollutedDeltaBase = require("../setEXP/PollutedDelta");

class PollutedDelta extends PollutedDeltaBase {
  constructor (game) {
    super(game, "Polluted Delta", "Magic Online Promos", "PRM");
  }
}

module.exports = PollutedDelta;
