"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PollutedMireBase = require("../setATH/PollutedMire.js");

class PollutedMire extends PollutedMireBase {
  constructor(game) {
    super(game, "Polluted Mire", "Commander 2014", "C14");
  }
}

module.exports = PollutedMire;
