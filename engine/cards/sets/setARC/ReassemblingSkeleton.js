"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReassemblingSkeleton extends UnimplementedCard {
  constructor(game) {
    super(game, "Reassembling Skeleton", "Archenemy", "ARC");
  }
}

module.exports = ReassemblingSkeleton;
