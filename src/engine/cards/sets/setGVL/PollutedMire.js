"use strict";
const Constants = require ("../../../Constants");
const PollutedMireBase = require("../setCMA/PollutedMire");

class PollutedMire extends PollutedMireBase {
  constructor (game) {
    super(game, "Polluted Mire", "Duel Decks Anthology: Garruk vs. Liliana", "GVL");
  }
}

module.exports = PollutedMire;
