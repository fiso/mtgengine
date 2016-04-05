"use strict";
const Constants = require ("../../../Constants");
const ReassemblingSkeletonBase = require("../setARC/ReassemblingSkeleton");

class ReassemblingSkeleton extends ReassemblingSkeletonBase {
  constructor(game) {
    super(game, "Reassembling Skeleton", "Magic 2011", "M11");
  }
}

module.exports = ReassemblingSkeleton;
