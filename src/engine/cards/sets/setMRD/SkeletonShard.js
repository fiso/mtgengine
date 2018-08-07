"use strict";
const Constants = require ("../../../Constants");
const SkeletonShardBase = require("../setHOP/SkeletonShard");

class SkeletonShard extends SkeletonShardBase {
  constructor (game) {
    super(game, "Skeleton Shard", "Mirrodin", "MRD");
  }
}

module.exports = SkeletonShard;
