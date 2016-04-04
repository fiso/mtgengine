"use strict";
const Constants = require ("../../../Constants");
const PollutedMireBase = require("../setATH/PollutedMire");

class PollutedMire extends PollutedMireBase {
  constructor(game) {
    super(game, "Polluted Mire", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = PollutedMire;
