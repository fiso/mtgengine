"use strict";
const Constants = require ("../../../Constants");
const BranchingBoltBase = require("../setARC/BranchingBolt");

class BranchingBolt extends BranchingBoltBase {
  constructor (game) {
    super(game, "Branching Bolt", "Shards of Alara", "ALA");
  }
}

module.exports = BranchingBolt;
