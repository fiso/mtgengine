"use strict";
const Constants = require ("../../../Constants");
const PollutedDeltaBase = require("../setEXP/PollutedDelta");

class PollutedDelta extends PollutedDeltaBase {
  constructor (game) {
    super(game, "Polluted Delta", "Judge Gift Cards 2009", "G09");
  }
}

module.exports = PollutedDelta;
