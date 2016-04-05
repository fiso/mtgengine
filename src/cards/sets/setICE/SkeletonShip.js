"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkeletonShip extends UnimplementedCard {
  constructor(game) {
    super(game, "Skeleton Ship", "Ice Age", "ICE");
  }
}

module.exports = SkeletonShip;
