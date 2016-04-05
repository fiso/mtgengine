"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishBranchbender extends UnimplementedCard {
  constructor(game) {
    super(game, "Elvish Branchbender", "Lorwyn", "LRW");
  }
}

module.exports = ElvishBranchbender;
