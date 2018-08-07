"use strict";
const Constants = require ("../../../Constants");
const ReassemblingSkeletonBase = require("../setM19/ReassemblingSkeleton");

class ReassemblingSkeleton extends ReassemblingSkeletonBase {
  constructor (game) {
    super(game, "Reassembling Skeleton", "Magic 2011", "M11");
  }
}

module.exports = ReassemblingSkeleton;
