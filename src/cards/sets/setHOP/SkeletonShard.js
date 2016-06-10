"use strict";
const Constants = require ("../../../Constants");
const SkeletonShardBase = require("../setMRD/SkeletonShard");

class SkeletonShard extends SkeletonShardBase {
  constructor (game) {
    super(game, "Skeleton Shard", "Planechase", "HOP");
  }
}

module.exports = SkeletonShard;
