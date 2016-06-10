"use strict";
const Constants = require ("../../../Constants");
const PollutedMireBase = require("../setATH/PollutedMire");

class PollutedMire extends PollutedMireBase {
  constructor (game) {
    super(game, "Polluted Mire", "Battle Royale Box Set", "BRB");
  }
}

module.exports = PollutedMire;
