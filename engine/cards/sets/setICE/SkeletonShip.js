"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkeletonShip extends Card {
  constructor(game) {
    super(game, "Skeleton Ship", "Ice Age", "ICE");
  }
}

module.exports = SkeletonShip;
