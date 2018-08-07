"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkeletonShip extends UnimplementedCard {
  constructor (game) {
    super(game, "Skeleton Ship", "Masters Edition II", "ME2");
  }
}

module.exports = SkeletonShip;
