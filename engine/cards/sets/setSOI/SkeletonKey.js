"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkeletonKey extends UnimplementedCard {
  constructor(game) {
    super(game, "Skeleton Key", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SkeletonKey;
