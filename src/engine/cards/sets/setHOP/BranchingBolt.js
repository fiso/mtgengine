"use strict";
const Constants = require ("../../../Constants");
const BranchingBoltBase = require("../setARC/BranchingBolt");

class BranchingBolt extends BranchingBoltBase {
  constructor (game) {
    super(game, "Branching Bolt", "Planechase", "HOP");
  }
}

module.exports = BranchingBolt;
