"use strict";
const Constants = require ("../../../Constants");
const PollutedMireBase = require("../setCMA/PollutedMire");

class PollutedMire extends PollutedMireBase {
  constructor (game) {
    super(game, "Polluted Mire", "Commander 2015", "C15");
  }
}

module.exports = PollutedMire;
