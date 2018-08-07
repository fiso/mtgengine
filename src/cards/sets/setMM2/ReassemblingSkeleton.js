"use strict";
const Constants = require ("../../../Constants");
const ReassemblingSkeletonBase = require("../setM19/ReassemblingSkeleton");

class ReassemblingSkeleton extends ReassemblingSkeletonBase {
  constructor (game) {
    super(game, "Reassembling Skeleton", "Modern Masters 2015", "MM2");
  }
}

module.exports = ReassemblingSkeleton;
