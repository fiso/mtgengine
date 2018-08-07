"use strict";
const Constants = require ("../../../Constants");
const ReassemblingSkeletonBase = require("../setM19/ReassemblingSkeleton");

class ReassemblingSkeleton extends ReassemblingSkeletonBase {
  constructor (game) {
    super(game, "Reassembling Skeleton", "Archenemy", "ARC");
  }
}

module.exports = ReassemblingSkeleton;
