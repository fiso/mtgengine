"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BranchingBolt extends Card {
  constructor(game) {
    super(game, "Branching Bolt", "Archenemy", "ARC");
  }
}

module.exports = BranchingBolt;
