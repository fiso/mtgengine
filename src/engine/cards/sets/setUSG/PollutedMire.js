"use strict";
const Constants = require ("../../../Constants");
const PollutedMireBase = require("../setCMA/PollutedMire");

class PollutedMire extends PollutedMireBase {
  constructor (game) {
    super(game, "Polluted Mire", "Urza's Saga", "USG");
  }
}

module.exports = PollutedMire;
