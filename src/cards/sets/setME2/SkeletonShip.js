"use strict";
const Constants = require ("../../../Constants");
const SkeletonShipBase = require("../setICE/SkeletonShip");

class SkeletonShip extends SkeletonShipBase {
  constructor(game) {
    super(game, "Skeleton Ship", "Masters Edition II", "ME2");
  }
}

module.exports = SkeletonShip;
