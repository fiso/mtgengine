"use strict";
const Constants = require ("../../../Constants");
const ElvishBranchbenderBase = require("../setDDU/ElvishBranchbender");

class ElvishBranchbender extends ElvishBranchbenderBase {
  constructor (game) {
    super(game, "Elvish Branchbender", "Lorwyn", "LRW");
  }
}

module.exports = ElvishBranchbender;
