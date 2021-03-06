"use strict";
const Constants = require ("../../../Constants");
const ReassemblingSkeletonBase = require("../setM19/ReassemblingSkeleton");

class ReassemblingSkeleton extends ReassemblingSkeletonBase {
  constructor (game) {
    super(game, "Reassembling Skeleton", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = ReassemblingSkeleton;
