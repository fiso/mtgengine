"use strict";
const Constants = require ("../../../Constants");
const SkeletonShipBase = require("../setME2/SkeletonShip");

class SkeletonShip extends SkeletonShipBase {
  constructor (game) {
    super(game, "Skeleton Ship", "Ice Age", "ICE");
  }
}

module.exports = SkeletonShip;
