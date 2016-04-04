"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SplitDecision extends Card {
  constructor(game) {
    super(game, "Split Decision", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = SplitDecision;
