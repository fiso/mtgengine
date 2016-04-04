"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SentinelDispatch extends Card {
  constructor(game) {
    super(game, "Sentinel Dispatch", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = SentinelDispatch;
