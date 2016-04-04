"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ReachofBranchesBase = require("../setMMA/ReachofBranches.js");

class ReachofBranches extends ReachofBranchesBase {
  constructor(game) {
    super(game, "Reach of Branches", "Morningtide", "MOR");
  }
}

module.exports = ReachofBranches;
