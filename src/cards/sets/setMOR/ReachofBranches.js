"use strict";
const Constants = require ("../../../Constants");
const ReachofBranchesBase = require("../setMMA/ReachofBranches");

class ReachofBranches extends ReachofBranchesBase {
  constructor(game) {
    super(game, "Reach of Branches", "Morningtide", "MOR");
  }
}

module.exports = ReachofBranches;
