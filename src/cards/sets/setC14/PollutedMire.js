"use strict";
const Constants = require ("../../../Constants");
const PollutedMireBase = require("../setATH/PollutedMire");

class PollutedMire extends PollutedMireBase {
  constructor (game) {
    super(game, "Polluted Mire", "Commander 2014", "C14");
  }
}

module.exports = PollutedMire;
