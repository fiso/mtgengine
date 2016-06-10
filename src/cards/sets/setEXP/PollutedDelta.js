"use strict";
const Constants = require ("../../../Constants");
const PollutedDeltaBase = require("../setpJGP/PollutedDelta");

class PollutedDelta extends PollutedDeltaBase {
  constructor (game) {
    super(game, "Polluted Delta", "Zendikar Expedition", "EXP");
  }
}

module.exports = PollutedDelta;
