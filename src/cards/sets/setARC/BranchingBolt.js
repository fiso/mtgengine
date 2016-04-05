"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BranchingBolt extends UnimplementedCard {
  constructor(game) {
    super(game, "Branching Bolt", "Archenemy", "ARC");
  }
}

module.exports = BranchingBolt;
