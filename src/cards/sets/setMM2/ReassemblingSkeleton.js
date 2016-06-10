"use strict";
const Constants = require ("../../../Constants");
const ReassemblingSkeletonBase = require("../setARC/ReassemblingSkeleton");

class ReassemblingSkeleton extends ReassemblingSkeletonBase {
  constructor (game) {
    super(game, "Reassembling Skeleton", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = ReassemblingSkeleton;
