"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ViashinoSkeleton extends UnimplementedCard {
  constructor(game) {
    super(game, "Viashino Skeleton", "Shards of Alara", "ALA");
  }
}

module.exports = ViashinoSkeleton;
