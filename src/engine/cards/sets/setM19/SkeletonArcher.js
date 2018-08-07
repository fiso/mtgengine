"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkeletonArcher extends UnimplementedCard {
  constructor (game) {
    super(game, "Skeleton Archer", "Core Set 2019", "M19");
  }
}

module.exports = SkeletonArcher;
