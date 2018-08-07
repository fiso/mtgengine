"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkeletonShard extends UnimplementedCard {
  constructor (game) {
    super(game, "Skeleton Shard", "Planechase", "HOP");
  }
}

module.exports = SkeletonShard;
