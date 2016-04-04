"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkeletonShard extends Card {
  constructor(game) {
    super(game, "Skeleton Shard", "Mirrodin", "MRD");
  }
}

module.exports = SkeletonShard;
