"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CogworkTracker extends Card {
  constructor(game) {
    super(game, "Cogwork Tracker", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = CogworkTracker;
