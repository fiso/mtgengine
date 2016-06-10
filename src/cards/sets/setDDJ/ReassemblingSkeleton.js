"use strict";
const Constants = require ("../../../Constants");
const ReassemblingSkeletonBase = require("../setARC/ReassemblingSkeleton");

class ReassemblingSkeleton extends ReassemblingSkeletonBase {
  constructor (game) {
    super(game, "Reassembling Skeleton", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = ReassemblingSkeleton;
