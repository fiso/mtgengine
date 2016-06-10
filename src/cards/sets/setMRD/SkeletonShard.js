"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkeletonShard extends UnimplementedCard {
  constructor (game) {
    super(game, "Skeleton Shard", "Mirrodin", "MRD");
  }
}

module.exports = SkeletonShard;
