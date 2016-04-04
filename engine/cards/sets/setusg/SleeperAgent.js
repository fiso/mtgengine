"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SleeperAgentBase = require("../set10E/SleeperAgent.js");

class SleeperAgent extends SleeperAgentBase {
  constructor(game) {
    super(game, "Sleeper Agent", "Urza's Saga", "USG");
  }
}

module.exports = SleeperAgent;
