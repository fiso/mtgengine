"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PollutedMireBase = require("../setATH/PollutedMire.js");

class PollutedMire extends PollutedMireBase {
  constructor(game) {
    super(game, "Polluted Mire", "Urza's Saga", "USG");
  }
}

module.exports = PollutedMire;
