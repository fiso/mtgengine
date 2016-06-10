"use strict";
const Constants = require ("../../../Constants");
const SleeperAgentBase = require("../set10E/SleeperAgent");

class SleeperAgent extends SleeperAgentBase {
  constructor (game) {
    super(game, "Sleeper Agent", "Urza's Saga", "USG");
  }
}

module.exports = SleeperAgent;
