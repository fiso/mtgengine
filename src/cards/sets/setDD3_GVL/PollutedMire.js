"use strict";
const Constants = require ("../../../Constants");
const PollutedMireBase = require("../setATH/PollutedMire");

class PollutedMire extends PollutedMireBase {
  constructor (game) {
    super(game, "Polluted Mire", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = PollutedMire;
