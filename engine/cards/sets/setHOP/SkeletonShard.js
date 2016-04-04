"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkeletonShardBase = require("../setMRD/SkeletonShard.js");

class SkeletonShard extends SkeletonShardBase {
  constructor(game) {
    super(game, "Skeleton Shard", "Planechase", "HOP");
  }
}

module.exports = SkeletonShard;
