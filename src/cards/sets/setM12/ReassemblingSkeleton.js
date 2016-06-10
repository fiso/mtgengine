"use strict";
const Constants = require ("../../../Constants");
const ReassemblingSkeletonBase = require("../setARC/ReassemblingSkeleton");

class ReassemblingSkeleton extends ReassemblingSkeletonBase {
  constructor (game) {
    super(game, "Reassembling Skeleton", "Magic 2012", "M12");
  }
}

module.exports = ReassemblingSkeleton;
