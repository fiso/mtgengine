"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BranchingBoltBase = require("../setARC/BranchingBolt.js");

class BranchingBolt extends BranchingBoltBase {
  constructor(game) {
    super(game, "Branching Bolt", "Shards of Alara", "ALA");
  }
}

module.exports = BranchingBolt;
